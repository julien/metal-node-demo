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

var _DemoSoyComponentSoy = require('./DemoSoyComponent.soy.js');

var _DemoSoyComponentSoy2 = _interopRequireDefault(_DemoSoyComponentSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DemoSoyComponent = function (_Component) {
  _inherits(DemoSoyComponent, _Component);

  function DemoSoyComponent() {
    _classCallCheck(this, DemoSoyComponent);

    return _possibleConstructorReturn(this, (DemoSoyComponent.__proto__ || Object.getPrototypeOf(DemoSoyComponent)).apply(this, arguments));
  }

  return DemoSoyComponent;
}(_metalComponent2.default);

DemoSoyComponent.STATE = {
  message: {
    validator: _metal2.default.isString,
    value: 'Demo Soy Component'
  }
};

_metalSoy2.default.register(DemoSoyComponent, _DemoSoyComponentSoy2.default);

exports.default = DemoSoyComponent;