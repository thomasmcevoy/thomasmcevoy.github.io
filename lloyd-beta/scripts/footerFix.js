function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function footerFix() {
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.clientHeight;
  var footer = document.querySelector('footer');

  if (windowHeight >= documentHeight) {
    pin(footer);
  }

  function pin(footer) {
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.left = '0';
    footer.style.right = '0';
  }
}

ready(footerFix);
