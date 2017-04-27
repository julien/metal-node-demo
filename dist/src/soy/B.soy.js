'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.B = undefined;

var _metalComponent = require('metal-component');

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from B.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace B.
   * @suppress {missingRequire}
   * @public
   */

  goog.module('B.incrementaldom');

  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;
  var soyIdom = goog.require('soy.idom');
  var dyn = soyIdom.renderDynamicContent;
  var print = soyIdom.print;

  var $templateAlias1 = _metalSoy2.default.getTemplate('C.incrementaldom', 'render');

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    ie_open('div');
    itext('B');
    $templateAlias1(null, null, opt_ijData);
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'B.render';
  }

  exports.render.params = [];
  exports.render.types = {};
  exports.templates = templates = exports;
  return exports;
});

var B = function (_Component) {
  _inherits(B, _Component);

  function B() {
    _classCallCheck(this, B);

    return _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).apply(this, arguments));
  }

  return B;
}(_metalComponent2.default);

_metalSoy2.default.register(B, templates);
exports.B = B;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */