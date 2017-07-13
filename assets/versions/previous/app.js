/**
  * x is a value between 0 and 1, indicating where in the animation you are.
  */
var duScrollDefaultEasing = function (x) {
  'use strict';

  if(x < 0.5) {
    return Math.pow(x*2, 2)/2;
  }
  return 1-Math.pow((1-x)*2, 2)/2;
};

angular.module('duScroll', [
  'duScroll.scrollspy', 
  'duScroll.smoothScroll', 
  'duScroll.scrollContainer', 
  'duScroll.spyContext',
  'duScroll.scrollHelpers'
])
  //Default animation duration for smoothScroll directive
  .value('duScrollDuration', 350)
  //Scrollspy debounce interval, set to 0 to disable
  .value('duScrollSpyWait', 100)
  //Wether or not multiple scrollspies can be active at once 
  .value('duScrollGreedy', false)
  //Default offset for smoothScroll directive
  .value('duScrollOffset', 0)
  //Default easing function for scroll animation
  .value('duScrollEasing', duScrollDefaultEasing);


angular.module('duScroll.scrollHelpers', ['duScroll.requestAnimation'])
.run(["$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset", function($window, $q, cancelAnimation, requestAnimation, duScrollEasing, duScrollDuration, duScrollOffset) {
  'use strict';

  var proto = angular.element.prototype;

  var isDocument = function(el) {
    return (typeof HTMLDocument !== 'undefined' && el instanceof HTMLDocument) || (el.nodeType && el.nodeType === el.DOCUMENT_NODE);
  };

  var isElement = function(el) {
    return (typeof HTMLElement !== 'undefined' && el instanceof HTMLElement) || (el.nodeType && el.nodeType === el.ELEMENT_NODE);
  };

  var unwrap = function(el) {
    return isElement(el) || isDocument(el) ? el : el[0];
  };

  proto.scrollTo = function(left, top, duration, easing) {
    var aliasFn;
    if(angular.isElement(left)) {
      aliasFn = this.scrollToElement;
    } else if(duration) {
      aliasFn = this.scrollToAnimated;
    }
    if(aliasFn) {
      return aliasFn.apply(this, arguments);
    }
    var el = unwrap(this);
    if(isDocument(el)) {
      return $window.scrollTo(left, top);
    }
    el.scrollLeft = left;
    el.scrollTop = top;
  };

  var scrollAnimation, deferred;
  proto.scrollToAnimated = function(left, top, duration, easing) {
    if(duration && !easing) {
      easing = duScrollEasing;
    }
    var startLeft = this.scrollLeft(),
        startTop = this.scrollTop(),
        deltaLeft = Math.round(left - startLeft),
        deltaTop = Math.round(top - startTop);

    var startTime = null;
    var el = this;

    var cancelOnEvents = 'scroll mousedown mousewheel touchmove keydown';
    var cancelScrollAnimation = function($event) {
      if (!$event || $event.which > 0) {
        el.unbind(cancelOnEvents, cancelScrollAnimation);
        cancelAnimation(scrollAnimation);
        deferred.reject();
        scrollAnimation = null;
      }
    };

    if(scrollAnimation) {
      cancelScrollAnimation();
    }
    deferred = $q.defer();

    if(!deltaLeft && !deltaTop) {
      deferred.resolve();
      return deferred.promise;
    }

    var animationStep = function(timestamp) {
      if (startTime === null) {
        startTime = timestamp;
      }

      var progress = timestamp - startTime;
      var percent = (progress >= duration ? 1 : easing(progress/duration));

      el.scrollTo(
        startLeft + Math.ceil(deltaLeft * percent),
        startTop + Math.ceil(deltaTop * percent)
      );
      if(percent < 1) {
        scrollAnimation = requestAnimation(animationStep);
      } else {
        el.unbind(cancelOnEvents, cancelScrollAnimation);
        scrollAnimation = null;
        deferred.resolve();
      }
    };

    //Fix random mobile safari bug when scrolling to top by hitting status bar
    el.scrollTo(startLeft, startTop);

    el.bind(cancelOnEvents, cancelScrollAnimation);

    scrollAnimation = requestAnimation(animationStep);
    return deferred.promise;
  };

  proto.scrollToElement = function(target, offset, duration, easing) {
    var el = unwrap(this);
    if(!angular.isNumber(offset) || isNaN(offset)) {
      offset = duScrollOffset;
    }
    var top = this.scrollTop() + unwrap(target).getBoundingClientRect().top - offset;
    if(isElement(el)) {
      top -= el.getBoundingClientRect().top;
    }
    return this.scrollTo(0, top, duration, easing);
  };

  var overloaders = {
    scrollLeft: function(value, duration, easing) {
      if(angular.isNumber(value)) {
        return this.scrollTo(value, this.scrollTop(), duration, easing);
      }
      var el = unwrap(this);
      if(isDocument(el)) {
        return $window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft;
      }
      return el.scrollLeft;
    },
    scrollTop: function(value, duration, easing) {
      if(angular.isNumber(value)) {
        return this.scrollTo(this.scrollTop(), value, duration, easing);
      }
      var el = unwrap(this);
      if(isDocument(el)) {
        return $window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      }
      return el.scrollTop;
    }
  };

  proto.scrollToElementAnimated = function(target, offset, duration, easing) {
    return this.scrollToElement(target, offset, duration || duScrollDuration, easing);
  };

  proto.scrollTopAnimated = function(top, duration, easing) {
    return this.scrollTop(top, duration || duScrollDuration, easing);
  };

  proto.scrollLeftAnimated = function(left, duration, easing) {
    return this.scrollLeft(left, duration || duScrollDuration, easing);
  };

  //Add duration and easing functionality to existing jQuery getter/setters
  var overloadScrollPos = function(superFn, overloadFn) {
    return function(value, duration, easing) {
      if(duration) {
        return overloadFn.apply(this, arguments);
      }
      return superFn.apply(this, arguments);
    };
  };

  for(var methodName in overloaders) {
    proto[methodName] = (proto[methodName] ? overloadScrollPos(proto[methodName], overloaders[methodName]) : overloaders[methodName]);
  }
}]);


//Adapted from https://gist.github.com/paulirish/1579671
angular.module('duScroll.polyfill', [])
.factory('polyfill', ["$window", function($window) {
  'use strict';

  var vendors = ['webkit', 'moz', 'o', 'ms'];

  return function(fnName, fallback) {
    if($window[fnName]) {
      return $window[fnName];
    }
    var suffix = fnName.substr(0, 1).toUpperCase() + fnName.substr(1);
    for(var key, i = 0; i < vendors.length; i++) {
      key = vendors[i]+suffix;
      if($window[key]) {
        return $window[key];
      }
    }
    return fallback;
  };
}]);

angular.module('duScroll.requestAnimation', ['duScroll.polyfill'])
.factory('requestAnimation', ["polyfill", "$timeout", function(polyfill, $timeout) {
  'use strict';

  var lastTime = 0;
  var fallback = function(callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = $timeout(function() { callback(currTime + timeToCall); },
      timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  
  return polyfill('requestAnimationFrame', fallback);
}])
.factory('cancelAnimation', ["polyfill", "$timeout", function(polyfill, $timeout) {
  'use strict';

  var fallback = function(promise) {
    $timeout.cancel(promise);
  };

  return polyfill('cancelAnimationFrame', fallback);
}]);


angular.module('duScroll.spyAPI', ['duScroll.scrollContainerAPI'])
.factory('spyAPI', ["$rootScope", "$timeout", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait", function($rootScope, $timeout, scrollContainerAPI, duScrollGreedy, duScrollSpyWait) {
  'use strict';

  var createScrollHandler = function(context) {
    var timer = false, queued = false;
    var handler = function() {
      queued = false;
      var container = context.container,
          containerEl = container[0],
          containerOffset = 0;

      if (typeof HTMLElement !== 'undefined' && containerEl instanceof HTMLElement || containerEl.nodeType && containerEl.nodeType === containerEl.ELEMENT_NODE) {
        containerOffset = containerEl.getBoundingClientRect().top;
      }

      var i, currentlyActive, toBeActive, spies, spy, pos;
      spies = context.spies;
      currentlyActive = context.currentlyActive;
      toBeActive = undefined;

      for(i = 0; i < spies.length; i++) {
        spy = spies[i];
        pos = spy.getTargetPosition();
        if (!pos) continue;

        if(pos.top + spy.offset - containerOffset < 20 && (pos.top*-1 + containerOffset) < pos.height) {
          if(!toBeActive || toBeActive.top < pos.top) {
            toBeActive = {
              top: pos.top,
              spy: spy
            };
          }
        }
      }
      if(toBeActive) {
        toBeActive = toBeActive.spy;
      }
      if(currentlyActive === toBeActive || (duScrollGreedy && !toBeActive)) return;
      if(currentlyActive) {
        currentlyActive.$element.removeClass('active');
        $rootScope.$broadcast('duScrollspy:becameInactive', currentlyActive.$element);
      }
      if(toBeActive) {
        toBeActive.$element.addClass('active');
        $rootScope.$broadcast('duScrollspy:becameActive', toBeActive.$element);
      }
      context.currentlyActive = toBeActive;
    };

    if(!duScrollSpyWait) {
      return handler;
    }

    //Debounce for potential performance savings
    return function() {
      if(!timer) {
        handler();
        timer = $timeout(function() {
          timer = false;
          if(queued) {
            handler();
          }
        }, duScrollSpyWait, false);
      } else {
        queued = true;
      }
    };
  };

  var contexts = {};

  var createContext = function($scope) {
    var id = $scope.$id;
    var context = {
      spies: []
    };

    context.handler = createScrollHandler(context);
    contexts[id] = context;

    $scope.$on('$destroy', function() {
      destroyContext($scope);
    });

    return id;
  };

  var destroyContext = function($scope) {
    var id = $scope.$id;
    var context = contexts[id], container = context.container;
    if(container) {
      container.off('scroll', context.handler);
    }
    delete contexts[id];
  };

  var defaultContextId = createContext($rootScope);

  var getContextForScope = function(scope) {
    if(contexts[scope.$id]) {
      return contexts[scope.$id];
    }
    if(scope.$parent) {
      return getContextForScope(scope.$parent);
    }
    return contexts[defaultContextId];
  };

  var getContextForSpy = function(spy) {
    var context, contextId, scope = spy.$element.scope();
    if(scope) {
      return getContextForScope(scope);
    }
    //No scope, most likely destroyed
    for(contextId in contexts) {
      context = contexts[contextId];
      if(context.spies.indexOf(spy) !== -1) {
        return context;
      }
    }
  };

  var isElementInDocument = function(element) {
    while (element.parentNode) {
      element = element.parentNode;
      if (element === document) {
        return true;
      }
    }
    return false;
  };

  var addSpy = function(spy) {
    var context = getContextForSpy(spy);
    if (!context) return;
    context.spies.push(spy);
    if (!context.container || !isElementInDocument(context.container)) {
      if(context.container) {
        context.container.off('scroll', context.handler);
      }
      context.container = scrollContainerAPI.getContainer(spy.$element.scope());
      context.container.on('scroll', context.handler).triggerHandler('scroll');
    }
  };

  var removeSpy = function(spy) {
    var context = getContextForSpy(spy);
    if(spy === context.currentlyActive) {
      context.currentlyActive = null;
    }
    var i = context.spies.indexOf(spy);
    if(i !== -1) {
      context.spies.splice(i, 1);
    }
  };

  return {
    addSpy: addSpy,
    removeSpy: removeSpy,
    createContext: createContext,
    destroyContext: destroyContext,
    getContextForScope: getContextForScope
  };
}]);


angular.module('duScroll.scrollContainerAPI', [])
.factory('scrollContainerAPI', ["$document", function($document) {
  'use strict';

  var containers = {};

  var setContainer = function(scope, element) {
    var id = scope.$id;
    containers[id] = element;
    return id;
  };

  var getContainerId = function(scope) {
    if(containers[scope.$id]) {
      return scope.$id;
    }
    if(scope.$parent) {
      return getContainerId(scope.$parent);
    }
    return;
  };

  var getContainer = function(scope) {
    var id = getContainerId(scope);
    return id ? containers[id] : $document;
  };

  var removeContainer = function(scope) {
    var id = getContainerId(scope);
    if(id) {
      delete containers[id];
    }
  };

  return {
    getContainerId:   getContainerId, 
    getContainer:     getContainer, 
    setContainer:     setContainer,
    removeContainer:  removeContainer
  };
}]);


angular.module('duScroll.smoothScroll', ['duScroll.scrollHelpers', 'duScroll.scrollContainerAPI'])
.directive('duSmoothScroll', ["duScrollDuration", "duScrollOffset", "scrollContainerAPI", function(duScrollDuration, duScrollOffset, scrollContainerAPI) {
  'use strict';

  return {
    link : function($scope, $element, $attr) {
      $element.on('click', function(e) {
        if(!$attr.href || $attr.href.indexOf('#') === -1) return;

        var target = document.getElementById($attr.href.replace(/.*(?=#[^\s]+$)/, '').substring(1));
        if(!target || !target.getBoundingClientRect) return;
        
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();

        var offset    = $attr.offset ? parseInt($attr.offset, 10) : duScrollOffset;
        var duration  = $attr.duration ? parseInt($attr.duration, 10) : duScrollDuration;
        var container = scrollContainerAPI.getContainer($scope);

        container.scrollToElement(
          angular.element(target), 
          isNaN(offset) ? 0 : offset, 
          isNaN(duration) ? 0 : duration
        );
      });
    }
  };
}]);


angular.module('duScroll.spyContext', ['duScroll.spyAPI'])
.directive('duSpyContext', ["spyAPI", function(spyAPI) {
  'use strict';

  return {
    restrict: 'A',
    scope: true,
    compile: function compile(tElement, tAttrs, transclude) {
      return {
        pre: function preLink($scope, iElement, iAttrs, controller) {
          spyAPI.createContext($scope);
        }
      };
    }
  };
}]);


angular.module('duScroll.scrollContainer', ['duScroll.scrollContainerAPI'])
.directive('duScrollContainer', ["scrollContainerAPI", function(scrollContainerAPI){
  'use strict';

  return {
    restrict: 'A',
    scope: true,
    compile: function compile(tElement, tAttrs, transclude) {
      return {
        pre: function preLink($scope, iElement, iAttrs, controller) {
          iAttrs.$observe('duScrollContainer', function(element) {
            if(angular.isString(element)) {
              element = document.getElementById(element);
            }

            element = (angular.isElement(element) ? angular.element(element) : iElement);
            scrollContainerAPI.setContainer($scope, element);
            $scope.$on('$destroy', function() {
              scrollContainerAPI.removeContainer($scope);
            });
          });
        }
      };
    }
  };
}]);


angular.module('duScroll.scrollspy', ['duScroll.spyAPI'])
.directive('duScrollspy', ["spyAPI", "duScrollOffset", "$timeout", "$rootScope", function(spyAPI, duScrollOffset, $timeout, $rootScope) {
  'use strict';

  var Spy = function(targetElementOrId, $element, offset) {
    if(angular.isElement(targetElementOrId)) {
      this.target = targetElementOrId;
    } else if(angular.isString(targetElementOrId)) {
      this.targetId = targetElementOrId;
    }
    this.$element = $element;
    this.offset = offset;
  };

  Spy.prototype.getTargetElement = function() {
    if (!this.target && this.targetId) {
      this.target = document.getElementById(this.targetId);
    }
    return this.target;
  };

  Spy.prototype.getTargetPosition = function() {
    var target = this.getTargetElement();
    if(target) {
      return target.getBoundingClientRect();
    }
  };

  Spy.prototype.flushTargetCache = function() {
    if(this.targetId) {
      this.target = undefined;
    }
  };

  return {
    link: function ($scope, $element, $attr) {
      var href = $attr.ngHref || $attr.href;
      var targetId;

      if (href && href.indexOf('#') !== -1) {
        targetId = href.replace(/.*(?=#[^\s]+$)/, '').substring(1);
      } else if($attr.duScrollspy) {
        targetId = $attr.duScrollspy;
      }
      if(!targetId) return;

      // Run this in the next execution loop so that the scroll context has a chance
      // to initialize
      $timeout(function() {
        var spy = new Spy(targetId, $element, -($attr.offset ? parseInt($attr.offset, 10) : duScrollOffset));
        spyAPI.addSpy(spy);

        $scope.$on('$destroy', function() {
          spyAPI.removeSpy(spy);
        });
        $scope.$on('$locationChangeSuccess', spy.flushTargetCache.bind(spy));
        $rootScope.$on('$stateChangeSuccess', spy.flushTargetCache.bind(spy));
      }, 0, false);
    }
  };
}]);

angular.module('angularSlideables', [])
.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target, content;
            
            attrs.expanded = false;
            
            element.bind('click', function() {
                if (!target) target = document.querySelector(attrs.slideToggle);
                if (!content) content = target.querySelector('.slideable_content');
                
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});

//  angularModalService.js
//
//  Service for showing modal dialogs.

/***** JSLint Config *****/
/*global angular  */
(function() {

  'use strict';

  var module = angular.module('angularModalService', []);

  module.factory('ModalService', ['$document', '$compile', '$controller', '$http', '$rootScope', '$q', '$timeout', '$templateCache',
    function($document, $compile, $controller, $http, $rootScope, $q, $timeout, $templateCache) {

    //  Get the body of the document, we'll add the modal to this.
    var body = $document.find('body');
    
    function ModalService() {

      var self = this;

      //  Returns a promise which gets the template, either
      //  from the template parameter or via a request to the 
      //  template url parameter.
      var getTemplate = function(template, templateUrl) {
        var deferred = $q.defer();
        if(template) {
          deferred.resolve(template);
        } else if(templateUrl) {
          // check to see if the template has already been loaded
          var cachedTemplate = $templateCache.get(templateUrl);
          if(cachedTemplate !== undefined) {
            deferred.resolve(cachedTemplate);
          }
          // if not, let's grab the template for the first time
          else {
            $http({method: 'GET', url: templateUrl, cache: true})
              .then(function(result) {
                // save template into the cache and return the template
                $templateCache.put(templateUrl, result.data);
                deferred.resolve(result.data);
              })
              .catch(function(error) {
                deferred.reject(error);
              });
          }
        } else {
          deferred.reject("No template or templateUrl has been specified.");
        }
        return deferred.promise;
      };

      self.showModal = function(options) {
        
        //  Create a deferred we'll resolve when the modal is ready.
        var deferred = $q.defer();

        //  Validate the input parameters.
        var controller = options.controller;
        if(!controller) {
          deferred.reject("No controller has been specified.");
          return deferred.promise;
        }

        //  Get the actual html of the template.
        getTemplate(options.template, options.templateUrl)
          .then(function(template) {

            //  Create a new scope for the modal.
            var modalScope = $rootScope.$new();

            //  Create the inputs object to the controller - this will include
            //  the scope, as well as all inputs provided.
            //  We will also create a deferred that is resolved with a provided
            //  close function. The controller can then call 'close(result)'.
            //  The controller can also provide a delay for closing - this is 
            //  helpful if there are closing animations which must finish first.
            var closeDeferred = $q.defer();
            var inputs = {
              $scope: modalScope,
              close: function(result, delay) {
                if(delay === undefined || delay === null) delay = 0;
                $timeout(function () {
                  closeDeferred.resolve(result);
                }, delay);
              }
            };

            //  If we have provided any inputs, pass them to the controller.
            if(options.inputs) {
              for(var inputName in options.inputs) {
                inputs[inputName] = options.inputs[inputName];
              }
            }

            //  Parse the modal HTML into a DOM element (in template form).
            var modalElementTemplate = angular.element(template);

            //  Compile then link the template element, building the actual element.
            //  Set the $element on the inputs so that it can be injected if required.
            var linkFn = $compile(modalElementTemplate);
            var modalElement = linkFn(modalScope);
            inputs.$element = modalElement;

            //  Create the controller, explicitly specifying the scope to use.
            var modalController = $controller(controller, inputs);

            //  Finally, append the modal to the dom.
            if (options.appendElement) {
              // append to custom append element
              options.appendElement.append(modalElement);
            } else {
              // append to body when no custom append element is specified
              body.append(modalElement);
            }

            //  We now have a modal object.
            var modal = {
              controller: modalController,
              scope: modalScope,
              element: modalElement,
              close: closeDeferred.promise
            };

            //  When close is resolved, we'll clean up the scope and element.
            modal.close.then(function(result) {
              //  Clean up the scope
              modalScope.$destroy();
              //  Remove the element from the dom.
              modalElement.remove();
            });

            deferred.resolve(modal);

          })
          .catch(function(error) {
            deferred.reject(error);
          });

        return deferred.promise;
      };

    }

    return new ModalService();
  }]);

}());

(function() {
  'use strict';

  angular.module('app', [
    'duScroll',
    'angularSlideables',
    'angularModalService',
    'app.about',
    'app.music',
    'app.shows',
    'app.contact'
  ]);

})();

(function() {
  'use strict';

  angular.module('app.about', []);

})();

(function() {
  'use strict';

  angular.module('app.contact', []);

})();

(function() {
  'use strict';

  angular.module('app.music', []);

})();

(function() {
  'use strict';

  angular.module('app.shows', []);

})();

(function() {
  'use strict';

  function mmss () {
    return function(input) {
      var mm = Math.floor(input / 60),
      ss = Math.floor(input) - (mm * 60);

      if (ss < 10) ss = '0' + ss;

      return mm + ':' + ss;
    };
  }

  angular
    .module('app')
    .filter('mmss', mmss);

})();

(function() {
  'use strict';

  function bioService( $window, $timeout ) {
    var bio,
        mlq   = $window.matchMedia('(max-width: 499px)'),
        label = 'SHOW MORE';

    bio = {
      mlq: mlq,

      label: label,

      toggle: function() {
        var that = this;

        that.showMore = !this.showMore;

        $timeout(function() {
          if(that.label == 'SHOW MORE') that.label = 'SHOW LESS';
          else that.label = 'SHOW MORE';
        }, 500);
      }
    };

    return bio;
  }

  angular
    .module('app.about')
    .service('bioService', bioService);

})();

(function() {
  'use strict';

  function formService ($rootScope, $http, $timeout, ModalService) {
    var form,
        data,
        label = 'SEND',
        sent = false,
        sending = false;

    form = {
      data: data,

      sent: sent,

      sending: sending,

      label: label,

      submit: function(valid) {
        var that = this;

        if (valid) {
          this.sending = true;
          $http({
            url: 'scripts/send.php',
            method: 'POST',
            data: that.data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(data) {
            that.success();
            console.log("OK", data);
          }).error(function(data) {
            that.sending = false;
            console.log("ERR", data);
          });
        }
      },

      success: function() {
        this.sent = true;
        this.sending = false;
        this.label = 'SENT';
        this.reset();
        ModalService.showModal({
          templateUrl: "modal.html",
          controller: "ModalController"
        }).then(function(modal) {
          modal.close.then(function(result) {
            console.log(result);
          });
        });
      },

      reset: function() {
        var that = this;

        this.data.name = '';
        this.data.email = '';
        this.data.message = '';

        $timeout(function() {
          that.sent = false;
          that.label = 'SEND';
        }, 3000);
      }
    };

    return form;
  }

  angular
    .module('app.contact')
    .factory('formService', formService);

})();

(function() {
  'use strict';

  // extract the audio for making the player easier to test
  function audio ($document) {
    var audio = $document[0].createElement('audio');
    return audio;
  }

  angular
    .module('app.music')
    .factory('audio', audio);

})();

(function() {
  'use strict';

  function playerService ($rootScope, audio) {
    var player,
        playlist = [],
        paused = false,
        current = {
          album: 0,
          track: 0
        };

    player = {
      playlist: playlist,

      paused: paused,

      current: current,

      playing: false,

      pristine: true,

      progress: 0,

      duration: 0,

      progress_percent: 0,

      play: function(track, album) {
        if (!playlist.length) return;

        if (angular.isDefined(track)) current.track = track;
        if (angular.isDefined(album)) current.album = album;

        if (!this.paused || this.pristine || angular.isDefined(track)) audio.src = playlist[current.album].tracks[current.track].url;
        audio.play();
        this.playing = true;
        this.pristine = false;
        this.paused = false;
      },

      pause: function() {
        if (player.playing) {
          audio.pause();
          this.playing = false;
          this.paused = true;
        }
      },

      next: function() {
        if (!playlist.length) return;
        this.paused = false;
        this.progress_percent = 0;
        if (playlist[current.album].tracks.length > (current.track + 1)) {
          current.track++;
        } else {
          current.track = 0;
          current.album = (current.album + 1) % playlist.length;
        }
        if (player.playing) this.play();
      },

      previous: function() {
        if (!playlist.length) return;
        this.paused = false;
        this.progress_percent = 0;
        if (audio.currentTime > 3 && this.playing) { audio.currentTime = 0; }
        else {
          if (current.track > 0) {
            current.track--;
          } else {
            current.album = (current.album - 1 + playlist.length) % playlist.length;
            current.track = playlist[current.album].tracks.length - 1;
          }
        }
        if (this.playing) this.play();
      },

      timeUpdate: function() {
        player.progress = audio.currentTime || 0;
        player.duration = parseInt(audio.duration, 10) || 0;
        player.progress_percent = player.progress / player.duration * 100;
      }
    };

    playlist.add = function(album) {
      if (playlist.indexOf(album) != -1) return;
      playlist.push(album);
    };

    audio.addEventListener('ended', function() {
      $rootScope.$apply(player.next);
    }, false);

    audio.addEventListener('timeupdate', function(evt) {
      $rootScope.$apply(player.timeUpdate);
    });

    return player;
  }

  angular
    .module('app.music')
    .factory('playerService', playerService);

})();

(function() {
  'use strict';

  function calService ($window, $timeout) {
    var cal,
        mlq      = $window.matchMedia('(orientation: portrait) and (max-width: 749px)'),
        numCols  = mlq.matches ? 2 : 3,
        showMore = false,
        label    = 'SHOW MORE';

    cal = {
      mlq: mlq,

      numCols: numCols,

      showMore: showMore,

      label: label,

      toggle: function() {
        var that = this;

        that.showMore = !this.showMore;

        $timeout(function() {
          if(that.label == 'SHOW MORE') that.label = 'SHOW LESS';
          else that.label = 'SHOW MORE';
        }, 500);
      }
    };

    return cal;
  }

  angular
    .module('app.shows')
    .factory('calService', calService);

})();

(function() {
  'use strict';

  function AboutController( bioService ) {
    var vm = this;

    vm.label      = bioService.label;
    vm.toggle     = bioService.toggle;
    vm.showMore   = bioService.showMore;
    vm.showButton = bioService.mlq.matches;
  }

  angular
    .module('app.about')
    .controller('AboutController', AboutController);

})();

(function() {
  'use strict';

  function ContactController (formService, ModalService) {
    var vm = this;

    vm.data    = formService.data;
    vm.label   = formService.label;
    vm.sent    = formService.sent;
    vm.sending = formService.sending;
    vm.submit  = formService.submit;
    vm.success = formService.success;
    vm.reset   = formService.reset;
  }

  angular
    .module('app.contact')
    .controller('ContactController', ContactController);

})();

(function() {
  'use strict';

  function ModalController ($scope, close) {
    $scope.display = true;

    $scope.close = function() {
      $scope.display = false;
      close();
    };
  }

  angular
    .module('app.contact')
    .controller('ModalController', ModalController);

})();

(function() {
  'use strict';

  function MusicController ($http, playerService) {
    var vm = this;

    vm.player = playerService;

    $http.get('albums.json').success(function(data) {
      vm.albums = data;
    });
  }

  angular
    .module('app.music')
    .controller('MusicController', MusicController);

})();

(function() {
  'use strict';

  function ShowsController( $http, calService ) {
    var vm = this;

    vm.label    = calService.label;
    vm.toggle   = calService.toggle;
    vm.numCols  = calService.numCols;
    vm.showMore = calService.showMore;

    $http.get('shows.json').success(function(data) {
      vm.showData = data;
    });
  }

  angular
    .module('app.shows')
    .controller('ShowsController', ShowsController);

})();
