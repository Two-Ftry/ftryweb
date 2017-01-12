;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-yezi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M717.536 0c-168.768 278.976-302.304 141.792-497.6 342.432-172.352 177.056-112.576 390.304 32.512 463.744 143.232-73.184 289.76-236.832 398.464-473.728 0 0 97.664 299.136-201.504 587.36 145.28 170.144 391.84 51.776 460.736-218.912 74.912-294.272-120.384-593.888-192.608-700.896zM97.024 966.24c0.128 2.912 3.424 57.76 75.36 57.76 52.352 0 317.824-144.672 454.272-520.192-206.432 365.216-506.112 455.84-529.632 462.432z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chengyuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M631.678218 530.460444c59.84704-39.232536 99.394754-106.963127 99.394754-183.947476 0-121.325229-98.203626-219.696678-219.335451-219.696678-121.124661 0-219.332381 98.371448-219.332381 219.696678 0 76.984349 39.548738 144.713916 99.394754 183.947476-153.244196 50.460252-263.891226 194.950064-263.891226 365.293707l767.662821 0C895.571491 725.410508 784.923438 580.921719 631.678218 530.460444z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuzhi" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M973.3 640.2 819.7 640.2 819.7 486.6l-256 0L563.7 384.2l153.6 0c28.3 0 51.2-22.9 51.2-51.2L768.5 77c0-28.3-22.9-51.2-51.2-51.2L307.7 25.8c-28.3 0-51.2 22.9-51.2 51.2l0 256c0 28.3 22.9 51.2 51.2 51.2l153.6 0 0 102.4-256 0 0 153.6L51.7 640.2c-28.3 0-51.2 22.9-51.2 51.2l0 256c0 28.3 22.9 51.2 51.2 51.2l358.4 0c28.3 0 51.2-22.9 51.2-51.2l0-256c0-28.3-22.9-51.2-51.2-51.2L256.5 640.2 256.5 537.8l512 0 0 102.4L614.9 640.2c-28.3 0-51.2 22.9-51.2 51.2l0 256c0 28.3 22.9 51.2 51.2 51.2l358.4 0c28.3 0 51.2-22.9 51.2-51.2l0-256C1024.5 663.1 1001.6 640.2 973.3 640.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)