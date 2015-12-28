(function () {
  'use strict';
  function email() {
    var a, i;
    a = document.getElementsByClassName('email');
    for (i = 0; i < a.length; ++i) {
      a[i].setAttribute('href', 'mailto:' + 'arwata' + '@' + 'gmail' + '.' + 'com');
    }
  }
  email();

  var cb = function() {
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css';
    var l1 = document.createElement('link'); l1.rel = 'stylesheet'; l1.href = 'styles/main.min.css';
    var h = document.getElementsByTagName('head')[0]; h.appendChild(l).parentNode.appendChild(l1);
  };
  var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
  if (raf) raf(cb);
  else window.addEventListener('load', cb);

  var host = "itangsanjana.github.io";
  if ((host == window.location.host) && (window.location.protocol != "https:"))
  window.location.protocol = "https";
})();
