const express = require('express');
const app = express();
const jsdom = require('jsdom');

// document needs to be global because metal expects that
// i.e.
// When "requiring" metal-component, this happens:
//
// ./node_modules/metal-dom/lib/features.js:85
// features.animationElement_ = document.createElement('div');
//                              ^
// ReferenceError: document is not defined
global.document = jsdom.jsdom();
global.window = document.defaultView;

// not really sure how to use metal from nodejs
const metal = {
  core: require('metal').core,
  component: require('metal-component'),
  dom: require('metal-dom'),
  incrementalDom: require('metal-incremental-dom')
};

const incrementalDomString = require('./vendor/virtual_elements');
const elementOpen = incrementalDomString.elementOpen;
const elementClose = incrementalDomString.elementClose;
const elementVoid = incrementalDomString.elementVoid;
const text = incrementalDomString.text;
const patch = incrementalDomString.patch;
const getOutput = incrementalDomString.getOutput;


class DemoComponent extends metal.component.Component {
  render() {
    patch(this.element, function () {
      elementOpen('div', null, ['id', 'div-component']);

        elementOpen('button', null, ['id', 'button-1']);
          text('A button');
        elementClose('button');

        elementOpen('ul');
        for (let i = 0; i < 10; i++) {
          elementOpen('li');
            text(`List item ${i+1}`);
          elementClose('li');
        }
        elementClose('ul');

      elementClose('div');

      return getOutput();
    });
  }
}
DemoComponent.RENDERER = metal.incrementalDom.IncrementalDomRenderer;

const container = document.createElement('div');
container.setAttribute('id', 'main-container');
document.body.appendChild(container);

app.get('/', (req, res) => {
  const component = new DemoComponent({element: container});
  component.render();
  const html = document.documentElement.outerHTML;
  res.send(html);
});

const port = process.env.PORT ? process.env.PORT : 80;
app.listen(port, () => console.log(`listening on port ${port}`));
