const express = require('express');
const app = express();

const jsdom = require('jsdom');
global.document = jsdom.jsdom();
global.window = global.document.defaultView;

// const browser = require('./browser');
// global.Document = browser.DocumentFragment;
// global.DocumentFragment = browser.DocumentFragment;
// global.Element = function Element() {};
// global.document = browser.document;
// global.document.body = document.createElement();
// global.window = {};

const metal = {
  core: require('metal').core,
  component: require('metal-component'),
  dom: require('metal-dom'),
  incrementalDom: require('metal-incremental-dom'),
  jsx: require('metal-jsx')
};

const incrementalDomString = require('./vendor/virtual_elements');
const elementOpen = incrementalDomString.elementOpen;
const elementClose = incrementalDomString.elementClose;
const elementVoid = incrementalDomString.elementVoid;
const text = incrementalDomString.text;
const patch = incrementalDomString.patch;
const getOutput = incrementalDomString.getOutput;
global.IncrementalDOM = incrementalDomString;

const createJSXComponent = require('./lib/src/demo').createJSXComponent;

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
    });
  }
}
DemoComponent.RENDERER = metal.incrementalDom.IncrementalDomRenderer;

// This will break since HTMLElement is not
// defined on the "server" (even if jsdom is used)
// metal.core.defineWebComponent('metal-demo', DemoComponent);

app.get('/', (req, res) => {
  new DemoComponent({}).render();
  const html = `<!doctype html>
    <html>
      <head></head>
      <body>
        ${getOutput()}
      </body>
    </html>`;
  res.send(html);
});

app.get('/jsx', (req, res) => {

  createJSXComponent();

  const html = `<!doctype html>
    <html>
      <head></head>
      <body></body>

      <script>
        window.onload = function () {
          ${getOutput()}
        };
      </script>
    <html>`;

  res.send(html);
});

const port = process.env.PORT ? process.env.PORT : 80;
app.listen(port, () => console.log(`listening on port ${port}`));
