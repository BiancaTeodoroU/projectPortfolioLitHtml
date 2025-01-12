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
})({"../javascript/index.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//- Carrousel
var config = {
  type: 'carousel',
  startAt: 0,
  perView: 1
};
new Glide('.glide', config).mount();

//- Load description about me
var Load = /*#__PURE__*/function () {
  function Load() {
    _classCallCheck(this, Load);
  }
  return _createClass(Load, [{
    key: "mount",
    value: function mount() {
      document.addEventListener('DOMContentLoaded', this.loadFuc);
    }
  }, {
    key: "loadFuc",
    value: function loadFuc() {
      var elemento = document.querySelector('.s-load-title');
      if (!elemento) {
        return;
      }
      var textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = ' ';
      textoArray.forEach(function (letra, i) {
        setTimeout(function () {
          elemento.innerHTML += letra;
        }, 54 * i);
      });
    }
  }]);
}();
var loader = new Load();
loader.mount();
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = this.getAttribute('href');
    var targetSection = document.querySelector(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 100,
      // 100 é o deslocamento para compensar a navbar
      behavior: 'smooth'
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var timelines = document.querySelectorAll('[id^="timeline"]');
  timelines.forEach(function (timeline) {
    new CollapsibleTimeline("#".concat(timeline.id));
  });
});
var CollapsibleTimeline = /*#__PURE__*/function () {
  function CollapsibleTimeline(el) {
    _classCallCheck(this, CollapsibleTimeline);
    this.el = document.querySelector(el);
    this.init();
  }
  return _createClass(CollapsibleTimeline, [{
    key: "init",
    value: function init() {
      var _this$el;
      (_this$el = this.el) === null || _this$el === void 0 || _this$el.addEventListener("click", this.itemAction.bind(this));
    }
  }, {
    key: "animateItemAction",
    value: function animateItemAction(button, ctrld, contentHeight, shouldCollapse) {
      var expandedClass = "c-qualification__item-body--expanded";
      var animOptions = {
        duration: 300,
        easing: "cubic-bezier(0.65,0,0.35,1)"
      };
      if (shouldCollapse) {
        button.ariaExpanded = "false";
        ctrld.ariaHidden = "true";
        ctrld.classList.remove(expandedClass);
        animOptions.duration *= 2;
        this.animation = ctrld.animate([{
          height: "".concat(contentHeight, "px")
        }, {
          height: "".concat(contentHeight, "px")
        }, {
          height: "0px"
        }], animOptions);
      } else {
        button.ariaExpanded = "true";
        ctrld.ariaHidden = "false";
        ctrld.classList.add(expandedClass);
        this.animation = ctrld.animate([{
          height: "0px"
        }, {
          height: "".concat(contentHeight, "px")
        }], animOptions);
      }
    }
  }, {
    key: "itemAction",
    value: function itemAction(e) {
      var target = e.target;
      var action = target === null || target === void 0 ? void 0 : target.getAttribute("data-action");
      var item = target === null || target === void 0 ? void 0 : target.getAttribute("data-item");
      if (action) {
        var _this$el2;
        var targetExpanded = action === "expand" ? "false" : "true";
        var buttons = Array.from((_this$el2 = this.el) === null || _this$el2 === void 0 ? void 0 : _this$el2.querySelectorAll("[aria-expanded=\"".concat(targetExpanded, "\"]")));
        var wasExpanded = action === "collapse";
        for (var _i = 0, _buttons = buttons; _i < _buttons.length; _i++) {
          var _this$el3, _ctrld$firstElementCh;
          var button = _buttons[_i];
          var buttonID = button.getAttribute("data-item");
          var ctrld = (_this$el3 = this.el) === null || _this$el3 === void 0 ? void 0 : _this$el3.querySelector("#item".concat(buttonID, "-ctrld"));
          var contentHeight = (_ctrld$firstElementCh = ctrld.firstElementChild) === null || _ctrld$firstElementCh === void 0 ? void 0 : _ctrld$firstElementCh.offsetHeight;
          this.animateItemAction(button, ctrld, contentHeight, wasExpanded);
        }
      } else if (item) {
        var _this$el4, _this$el5, _ctrld$firstElementCh2;
        var _button = (_this$el4 = this.el) === null || _this$el4 === void 0 ? void 0 : _this$el4.querySelector("[data-item=\"".concat(item, "\"]"));
        var expanded = _button === null || _button === void 0 ? void 0 : _button.getAttribute("aria-expanded");
        if (!expanded) return;
        var _wasExpanded = expanded === "true";
        var _ctrld = (_this$el5 = this.el) === null || _this$el5 === void 0 ? void 0 : _this$el5.querySelector("#item".concat(item, "-ctrld"));
        var _contentHeight = (_ctrld$firstElementCh2 = _ctrld.firstElementChild) === null || _ctrld$firstElementCh2 === void 0 ? void 0 : _ctrld$firstElementCh2.offsetHeight;
        this.animateItemAction(_button, _ctrld, _contentHeight, _wasExpanded);
      }
    }
  }]);
}();
},{}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "38167" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../javascript/index.js"], null)
//# sourceMappingURL=/javascript.e85c570d.js.map