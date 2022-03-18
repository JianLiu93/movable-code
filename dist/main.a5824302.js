// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var code = document.querySelector('.code');
var css = document.querySelector('#css');
var string = "\n/*\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5C0F\u767D\u3002\n\u8FD9\u662F\u4E00\u4E2A\u5B9E\u73B0CSS\u4EE3\u7801\u4EE5\u6253\u5B57\u6548\u679C\u6253\u51FA\uFF0C\u9884\u89C8\u6837\u5F0F\u6DFB\u52A0\u6548\u679C\u7684demo\u4F5C\u54C1\u3002\n\u8FD9\u6B21\u4F7F\u7528CSS\u6765\u505A\u4E00\u4E2A\u592A\u6781\u56FE\u3002*/\n/*\u9996\u5148\u51C6\u5907\u4E00\u4E2Adiv\u5143\u7D20\uFF0Cclass\u547D\u540Dbox */\n.box {\n    width: 200px;\n    height: 200px;\n}\n\n/*\u63A5\u4E0B\u6765\u8BA9\u5B83\u53D8\u5706\uFF0C\u6DFB\u52A0\u7684\u6837\u5F0F\u662F*/\n.box {\n    border: none;\n    border-radius: 50%;\n    box-shadow: 0 0 5px rgba(0,0,0,0.3);\n}\n\n/*\u7136\u540E\u628A\u5B83\u5207\u6210\u4E00\u9ED1\u4E00\u767D\u4E24\u534A\uFF0C\u4EE3\u8868\u9634\u9633\u76F8\u9694*/\n.box {\n    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%,\n    rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n\n/*\u516B\u5366\u96CF\u5F62\u6709\u4E86\uFF0C\u9700\u8981\u5728\u5927\u7403\u4E2D\u518D\u52A0\u4E24\u4E2A\u5C0F\u7403\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4F2A\u5143\u7D20\u6765\u505A*/\n.box::before {\n    content: \"\";\n    display: block;\n    position: relative;\n    left: 50%;\n    top: 0;\n    transform: translateX(-50%);\n    width: 100px;\n    height: 100px;\n    background-color: #fff;\n    border-radius: 50%;\n}\n.box::after {\n    content: \"\";\n    display: block;\n    position: relative;\n    left: 50%;\n    bottom: 0;\n    transform: translateX(-50%);\n    width: 100px;\n    height: 100px;\n    background-color: #000;\n    border-radius: 50%;\n}\n\n/*\u63A5\u4E0B\u6765\u5C31\u9700\u8981\u753B\u9F99\u70B9\u775B\u7684\u4E00\u6B65\u4E86\uFF0C\u8BA9\u516B\u5366\u767D\u4E2D\u6709\u9ED1\uFF0C\u9ED1\u4E2D\u53C8\u767D\uFF0C\u5C55\u73B0\u76F8\u751F\u76F8\u514B\u7684\u5173\u7CFB*/\n.point1 {\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 25%;\n\ttransform: translate(-50%,-50%);\n\twidth: 20px;\n\theight: 20px;\n\tbackground-color: #000;\n\tborder-radius: 50%;\n\tbox-shadow: 0 0 2px rgba(0,0,0,0.3);\n\tz-index: 1;\n}\n.point2 {\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 75%;\n\ttransform: translate(-50%,-50%);\n\twidth: 20px;\n\theight: 20px;\n\tbackground-color: #fff;\n\tborder-radius: 50%;\n\tbox-shadow: 0 0 2px rgba(0,0,0,0.3);\n\tz-index: 1;\n}\n\n\n\n"; // let string1 = string.replace(/\n/g, '<br>');

console.log(string.length);
var n = 0;
var string2 = '';

var type = function type() {
  setTimeout(function () {
    // console.log(n, string[n]);
    // 逐个字符去判断是否为特殊符号
    var str1 = '';

    if (string[n] === '\n') {
      str1 = '<br>';
    } else if (string[n] === ' ') {
      str1 = '&nbsp;';
    } else {
      str1 = string[n];
    }

    string2 += str1;
    code.innerHTML = string2;
    css.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    code.scrollTo(0, 9999);
    n++;

    if (n < string.length) {
      type();
    }
  }, 10);
};

type();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.a5824302.js.map