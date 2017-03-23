const metal = {
  core: require('metal').core,
  component: require('metal-component'),
  incrementalDom: require('metal-incremental-dom')
};

const incrementalDomString = require('./vendor/virtual_elements');
const elementOpen = incrementalDomString.elementOpen;
const elementClose = incrementalDomString.elementClose;
const text = incrementalDomString.text;
const patch = incrementalDomString.patch;
global.IncrementalDOM = incrementalDomString;

// Demo IncrementalDOM component
class DemoIncrementalDOMComponent extends metal.component.Component {
  render() {
    return patch(this.element, function () {
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

        elementClose('ul');

        elementOpen('span');
          text('Components are also rendered on the client');
        elementClose('span');

      elementClose('div');
    });
  }
}
DemoIncrementalDOMComponent.RENDERER = metal.incrementalDom.default;

// This will break since window.customElements is not
// defined on the "server" (even if jsdom is used)
// metal.core.defineWebComponent('metal-demo-incdom', DemoIncrementalDOMComponent);

// We could "shim" the CustomElements API:
// https://html.spec.whatwg.org/multipage/scripting.html#custom-elements-api

module.exports = DemoIncrementalDOMComponent;

