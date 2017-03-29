'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalJsx = require('metal-jsx');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DemoJSXComponent = function (_JSXComponent) {
  _inherits(DemoJSXComponent, _JSXComponent);

  function DemoJSXComponent() {
    _classCallCheck(this, DemoJSXComponent);

    return _possibleConstructorReturn(this, (DemoJSXComponent.__proto__ || Object.getPrototypeOf(DemoJSXComponent)).apply(this, arguments));
  }

  _createClass(DemoJSXComponent, [{
    key: 'render',
    value: function render() {
      IncrementalDOM.elementOpen('h3');
      iDOMHelpers.renderArbitrary(this.props.message);
      return IncrementalDOM.elementClose('h3');
    }
  }]);

  return DemoJSXComponent;
}(_metalJsx.JSXComponent);

exports.default = DemoJSXComponent;