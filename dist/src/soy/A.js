'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = require('metal-component');

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _metal = require('metal');

var _metal2 = _interopRequireDefault(_metal);

var _ASoy = require('./A.soy.js');

var _ASoy2 = _interopRequireDefault(_ASoy);

var _BSoy = require('./B.soy.js');

var _BSoy2 = _interopRequireDefault(_BSoy);

var _CSoy = require('./C.soy.js');

var _CSoy2 = _interopRequireDefault(_CSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var C = function (_Component) {
  _inherits(C, _Component);

  function C() {
    _classCallCheck(this, C);

    return _possibleConstructorReturn(this, (C.__proto__ || Object.getPrototypeOf(C)).apply(this, arguments));
  }

  return C;
}(_metalComponent2.default);

_metalSoy2.default.register(C, _CSoy2.default);

var B = function (_Component2) {
  _inherits(B, _Component2);

  function B() {
    _classCallCheck(this, B);

    return _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).apply(this, arguments));
  }

  return B;
}(_metalComponent2.default);

_metalSoy2.default.register(B, _BSoy2.default);

var A = function (_Component3) {
  _inherits(A, _Component3);

  function A() {
    _classCallCheck(this, A);

    return _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).apply(this, arguments));
  }

  return A;
}(_metalComponent2.default);

_metalSoy2.default.register(A, _ASoy2.default);

exports.default = A;