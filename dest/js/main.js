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
    spaceBetween: 0,
    touchRatio: 0,
    effect: 'fade',
    navigation: {
      nextEl: '.c-button__swiper--next',
      prevEl: '.c-button__swiper--prev'
    }
  });
  var trendingSwiper = new Swiper('#trending', {
    speed: 400,
    spaceBetween: 0,
    touchRatio: 0,
    effect: 'fade',
    navigation: {
      nextEl: '.c-button__swiper--next',
      prevEl: '.c-button__swiper--prev'
    }
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