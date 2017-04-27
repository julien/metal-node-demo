'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.A = undefined;

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

  // This file was automatically generated from A.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace A.
   * @suppress {missingRequire}
   * @public
   */

  goog.module('A.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('B.incrementaldom', 'render');

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    ie_open('div');
    itext('A');
    $templateAlias1(null, null, opt_ijData);
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'A.render';
  }

  exports.render.params = [];
  exports.render.types = {};
  exports.templates = templates = exports;
  return exports;
});

var A = function (_Component) {
  _inherits(A, _Component);

  function A() {
    _classCallCheck(this, A);

    return _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).apply(this, arguments));
  }

  return A;
}(_metalComponent2.default);

_metalSoy2.default.register(A, templates);
exports.A = A;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */