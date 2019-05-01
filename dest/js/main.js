"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener('load', function () {
  var mobilemenu = new ClickManipulation({
    target: 'c-burger',
    closeTarget: 'l-mobile-sidebar',
    //If We need a close target, add close for this 
    animated: 'l-mobile-sidebar',
    active: 'l-mobile-sidebar--active'
  });
  var newsSwiper = new Swiper('#more-news', {
    speed: 400,
    spaceBetween: 40,
    touchRatio: 0,
    slidesPerView: 1,
    slidesPerColumn: 2,
    navigation: {
      nextEl: '#more-news--next',
      prevEl: '#more-news--prev'
    }
  });
  var trendingSwiper = new Swiper('#trending', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 40,
    touchRatio: 0,
    navigation: {
      nextEl: '#trending--next',
      prevEl: '#trending--prev'
    },
    breakpoints: {
      1024: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 1,
        slidesPerColumn: 2
      }
    }
  });
  var validation = new Validation({
    form: 'c-form',
    elements: [{
      "class": 'c-input__newsletter',
      validateBy: ['text', 'mail']
    }]
  });
});
/**
 * 
 * Mobile Menu Class
 * 
 */

var ClickManipulation =
/*#__PURE__*/
function () {
  function ClickManipulation(object) {
    _classCallCheck(this, ClickManipulation);

    this.classes = {
      target: ".".concat(object.target),
      closeTarget: ".".concat(object.closeTarget),
      animated: ".".concat(object.animated),
      active: object.active
    };
    this.target = document.querySelector(".".concat(object.target));
    this.closeTarget = object.closeTarget === 'notthis' ? null : document.querySelector(".".concat(object.closeTarget));
    this.animated = document.querySelector(".".concat(object.animated));
    this.active = object.active;
    if (this.animated) this.init();
  }

  _createClass(ClickManipulation, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.target.addEventListener('click', function () {
        _this.activate();
      });
      this.closeTarget.addEventListener('click', function (ev) {
        if (ev.target === _this.animated) _this.deactivate();
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.animated.classList.remove(this.active);
    }
  }, {
    key: "activate",
    value: function activate() {
      this.animated.classList.add(this.active);
    }
  }]);

  return ClickManipulation;
}();

var Validation =
/*#__PURE__*/
function () {
  function Validation(object) {
    _classCallCheck(this, Validation);

    this.form = document.querySelector(".".concat(object.form));
    this.inputs = object.elements;
    /* : Templates : */

    this.mailTemp = /\w@\w/;
    if (this.form) this.init();
  }

  _createClass(Validation, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.form.addEventListener('submit', function (ev) {
        ev.preventDefault();

        if (_this2.validateInputs()) {
          alert('Wiadomość wysłana');

          _this2.clearAllInputs();
        } else {
          alert('Proszę wpisać poprawnie maila');
        }
      });
    } //Validation

  }, {
    key: "validateInputs",
    value: function validateInputs() {
      var _this3 = this;

      var validated = true;
      this.inputs.forEach(function (el) {
        var input = document.querySelector(".".concat(el["class"])),
            types = el.validateBy;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var type = _step.value;

            if (!_this3.validationRouter(type, input)) {
              validated = false;
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
      return validated;
    } //Clearing all inputs

  }, {
    key: "clearAllInputs",
    value: function clearAllInputs() {
      this.inputs.forEach(function (el) {
        var input = document.querySelector(".".concat(el["class"]));
        input.value = '';
      });
    } //Router

  }, {
    key: "validationRouter",
    value: function validationRouter(type, input) {
      switch (type) {
        case 'text':
          return this.validateByText(input.value);

        case 'mail':
          return this.validateByMail(input.value);
      }
    } //Validate By

  }, {
    key: "validateByText",
    value: function validateByText(text) {
      return text.length > 0;
    }
  }, {
    key: "validateByMail",
    value: function validateByMail(text) {
      return this.mailTemp.test(text);
    }
  }]);

  return Validation;
}();