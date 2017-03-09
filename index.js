const express = require('express');
const app = express();

global.document = require('./browser').document;
global.document.body = document.createElement();
global.window = {};

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
    });
  }
}
DemoComponent.RENDERER = metal.incrementalDom.IncrementalDomRenderer;


app.get('/', (req, res) => {
  new DemoComponent({}).render();
  const html =
`
<!doctype html>
<html>
  <head></head>
  <body>
    ${getOutput()}
  </body>
</html>
`;
  res.send(html);
});

const port = process.env.PORT ? process.env.PORT : 80;
app.listen(port, () => console.log(`listening on port ${port}`));
