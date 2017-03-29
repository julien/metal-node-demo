'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var metal = {
  component: require('metal-component'),
  incrementalDom: require('metal-incremental-dom')
};

var incrementalDomString = require('../vendor/virtual_elements');
var elementOpen = incrementalDomString.elementOpen;
var elementClose = incrementalDomString.elementClose;
var text = incrementalDomString.text;
var patch = incrementalDomString.patch;

global.IncrementalDOM = incrementalDomString;

var DemoIncrementalDOMComponent = function (_metal$component$Comp) {
  _inherits(DemoIncrementalDOMComponent, _metal$component$Comp);

  function DemoIncrementalDOMComponent() {
    _classCallCheck(this, DemoIncrementalDOMComponent);

    return _possibleConstructorReturn(this, (DemoIncrementalDOMComponent.__proto__ || Object.getPrototypeOf(DemoIncrementalDOMComponent)).apply(this, arguments));
  }

  _createClass(DemoIncrementalDOMComponent, [{
    key: 'render',
    value: function render() {
      return patch({}, function () {
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
      });
    }
  }]);

  return DemoIncrementalDOMComponent;
}(metal.component.Component);

DemoIncrementalDOMComponent.RENDERER = metal.incrementalDom.default;
module.exports = DemoIncrementalDOMComponent;