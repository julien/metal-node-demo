const metal = {
  component: require('metal-component'),
  incrementalDom: require('metal-incremental-dom')
};

const incrementalDomString = require('../vendor/virtual_elements_latest');
const elementOpen = incrementalDomString.elementOpen;
const elementClose = incrementalDomString.elementClose;
const text = incrementalDomString.text;
const patch = incrementalDomString.patch;

global.IncrementalDOM = incrementalDomString;

class DemoIncrementalDOMComponent extends metal.component.Component {
  render() {
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
}
DemoIncrementalDOMComponent.RENDERER = metal.incrementalDom.default;
module.exports = DemoIncrementalDOMComponent;

