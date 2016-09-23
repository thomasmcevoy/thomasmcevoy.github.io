var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-48247929-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

setTimeout(function() {
  _gaq.push(['_trackEvent', 'Control', 'Bounce Rate', ''])
}, 30000); // not a bounce if the user stays 30 seconds
