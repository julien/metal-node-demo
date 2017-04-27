'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = require('metal-component').default;
var IncrementalDomRenderer = require('metal-incremental-dom').default;

var elementOpen = IncrementalDOM.elementOpen;
var elementClose = IncrementalDOM.elementClose;
var text = IncrementalDOM.text;

var AIDom = function (_Component) {
  _inherits(AIDom, _Component);

  function AIDom() {
    _classCallCheck(this, AIDom);

    return _possibleConstructorReturn(this, (AIDom.__proto__ || Object.getPrototypeOf(AIDom)).apply(this, arguments));
  }

  _createClass(AIDom, [{
    key: 'render',
    value: function render() {
      elementOpen('div');
      elementOpen('h3');
      text('Metal.js Demos');
      elementClose('h3');

      elementOpen('p');
      text('Here a several examples of Metal components rendered on the server');
      elementClose('p');

      elementOpen('small');
      text('(This is a Metal component)');
      elementClose('small');

      elementOpen('ul');

      elementOpen('li');
      elementOpen('a', null, ['href', '/jsx']);
      text('JSX component demo');
      elementClose('a');
      elementClose('li');

      elementOpen('li');
      elementOpen('a', null, ['href', '/soy']);
      text('Soy component demo');
      elementClose('a');
      elementClose('li');

      elementClose('ul');

      elementClose('div');
    }
  }]);

  return AIDom;
}(Component);

AIDom.RENDERER = IncrementalDomRenderer;
exports.default = AIDom;