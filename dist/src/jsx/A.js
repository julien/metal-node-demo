'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalJsx = require('metal-jsx');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var C = function (_JSXComponent) {
  _inherits(C, _JSXComponent);

  function C() {
    _classCallCheck(this, C);

    return _possibleConstructorReturn(this, (C.__proto__ || Object.getPrototypeOf(C)).apply(this, arguments));
  }

  _createClass(C, [{
    key: 'render',
    value: function render() {
      IncrementalDOM.elementOpen('div');
      IncrementalDOM.text('C');
      return IncrementalDOM.elementClose('div');
    }
  }]);

  return C;
}(_metalJsx.JSXComponent);

var B = function (_JSXComponent2) {
  _inherits(B, _JSXComponent2);

  function B() {
    _classCallCheck(this, B);

    return _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).apply(this, arguments));
  }

  _createClass(B, [{
    key: 'render',
    value: function render() {
      IncrementalDOM.elementOpen('div');
      IncrementalDOM.text('B');
      IncrementalDOM.elementVoid(C);
      return IncrementalDOM.elementClose('div');
    }
  }]);

  return B;
}(_metalJsx.JSXComponent);

var A = function (_JSXComponent3) {
  _inherits(A, _JSXComponent3);

  function A() {
    _classCallCheck(this, A);

    return _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).apply(this, arguments));
  }

  _createClass(A, [{
    key: 'render',
    value: function render() {
      IncrementalDOM.elementOpen('div');
      IncrementalDOM.text('A');
      IncrementalDOM.elementVoid(B);
      return IncrementalDOM.elementClose('div');
    }
  }]);

  return A;
}(_metalJsx.JSXComponent);

exports.default = A;