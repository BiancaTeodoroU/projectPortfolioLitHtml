"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// //- Carrousel

// const previousEl = document.getElementById('previous');
// const nextEl = document.getElementById('next');
// const sliderEl = document.getElementById('slider');

// previousEl.addEventListener('click', onPreviousClick)
// nextEl.addEventListener('click', onNextClick)

// function onPreviousClick() {
//     const sliderWidth = sliderEl.offsetWidth;
//     sliderEl.scrollLeft -= sliderWidth + 40;
// }

// function onNextClick() {
//     const sliderWidth = sliderEl.offsetWidth;
//     sliderEl.scrollLeft += sliderWidth + 40;
// }

// class Carrousel {
//     constructor() {
//         this.onPreviousClick = this.onPreviousClick.bind(this)
//         this.onNextClick = this.onNextClick.bind(this)
//     }

//     mount() {
//         const previousEl = document.querySelector('.c-carrousel--previous')
//         const nextEl = document.querySelector('.c-carrousel--next')

//         previousEl.addEventListener('click', this.onPreviousClick)
//         nextEl.addEventListener('click', this.onNextClick)
//     }

//     onPreviousClick() {
//         const sliderWidth = document.querySelector('.c-carrousel--slider').offsetWidth
//         document.querySelector('.c-carrousel--slider').scrollLeft -= sliderWidth 
//     }

//     onNextClick() {
//         const sliderWidth = document.querySelector('.c-carrousel--slider').offsetWidth
//         document.querySelector('.c-carrousel--slider').scrollLeft += sliderWidth 
//     }
// }

// const carrousel = new Carrousel()
// carrousel.mount()

// class Cards {
//     constructor() {
//         this.init()
//     }

//     init() {
//         document.addEventListener('DOMContentLoaded', () => {
//         setTimeout(() => {
//             this.setupCards()
//             this.activateCard(1) // Activates the second card by default
//         }, 1)
//         })
//     }

//     setupCards() {
//         const cardsContainer = document.querySelector(".c-carousel")
//         if (!cardsContainer) return

//         cardsContainer.addEventListener('click', (event) => {
//         const clickedCard = event.target
//         if (clickedCard.dataset.card) {
//             const cardIndex = parseInt(clickedCard.dataset.card)
//             this.activateCard(cardIndex)
//         }
//         });
//     }

//     activateCard(index) {
//         const cards = document.querySelectorAll(".c-carousel .c-carousel__card")
//         if (cards.length === 0) return

//         cards.forEach((card, i) => {
//         card.classList.remove("c-carousel__card--left", "c-carousel__card--center", "c-carousel__card--right")
//         if (i === index) {
//             card.classList.add("c-carousel__card--center")
//         } else if (i === this.getLeftIndex(index)) {
//             card.classList.add("c-carousel__card--left")
//         } else if (i === this.getRightIndex(index)) {
//             card.classList.add("c-carousel__card--right")
//         }
//         });
//     }

//     getLeftIndex(index) {
//         return (index - 1 + 3) % 3 // 3 is the total number of cards
//     }

//     getRightIndex(index) {
//         return (index + 1) % 3
//     }
// }

// // Instanciar a classe Cards
// const cardsInstance = new Cards()

document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('.carousel');
  var items = document.querySelectorAll('.item');
  var leftButton = document.querySelector('.button--left');
  var rightButton = document.querySelector('.button--right');
  console.log(carousel, items, leftButton, rightButton); // Adicione esta linha para verificar se os elementos são encontrados

  if (carousel && items.length > 0 && leftButton && rightButton) {
    var roll = function roll(direction) {
      carousel.classList.add("moving-".concat(direction));
      var _iterator = _createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var startPosition = item.dataset.position;
          var endPosition = void 0;
          if (direction === 'right') {
            endPosition = parseInt(startPosition) + 1;
          }
          if (direction === 'left') {
            endPosition = parseInt(startPosition) - 1;
          }
          if (endPosition > 5) {
            endPosition = 1;
            item.style.zIndex = '-1';
          } else if (endPosition < 1) {
            endPosition = 5;
            item.style.zIndex = '-1';
          } else {
            item.style.zIndex = '';
          }
          item.dataset.position = endPosition;
          item.addEventListener("transitionend", function () {
            carousel.classList.remove("moving-".concat(direction));
          }, false);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var activeItem = document.querySelector('[data-position="3"]');
      console.log(activeItem);
    };
    leftButton.addEventListener('click', function () {
      roll('left');
    });
    rightButton.addEventListener('click', function () {
      roll('right');
    });
  } else {
    console.error('Elementos não encontrados no DOM.');
  }
});

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
      var elemento = document.querySelector('.s-load-description');
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