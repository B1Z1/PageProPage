"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener('load', function () {
  var mobilemenu = new MobileMenu({
    burger: 'c-burger',
    aside: 'l-mobile-sidebar',
    active: 'l-mobile-sidebar--active'
  });
});

var MobileMenu =
/*#__PURE__*/
function () {
  function MobileMenu(object) {
    _classCallCheck(this, MobileMenu);

    this.classes = {
      burger: ".".concat(object.burger),
      aside: ".".concat(object.aside)
    };
    this.aside = document.querySelector(".".concat(object.aside));
    this.active = object.active;
    if (this.aside) this.init();
  }

  _createClass(MobileMenu, [{
    key: "init",
    value: function init() {
      var _this = this;

      window.addEventListener('click', function (ev) {
        var target = ev.target;

        if (target.closest(_this.classes.burger)) {
          _this.aside.classList.add(_this.active);
        } else if (!target.closest(_this.classes.aside)) {
          _this.aside.classList.remove(_this.active);
        }
      });
    }
  }]);

  return MobileMenu;
}();