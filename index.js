const express = require('express');
const app = express();

const jsdom = require('jsdom');
global.document = jsdom.jsdom();
global.window = global.document.defaultView;

const incrementalDomString = require('./vendor/virtual_elements');
const getOutput = incrementalDomString.getOutput;

const DemoIncrementalDOMComponent = require('./src/DemoIncrementalDOMComponent');
const DemoJSXComponent = require('./lib/src/DemoJSXComponent').default;
const DemoSoyComponent = require('./lib/src/DemoSoyComponent').default;

const printHtml = (title = 'Demo') => `<!doctype html>
<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    ${getOutput()}
  </body>
</html>`;

app.get('/', (req, res) => {
  new DemoIncrementalDOMComponent();
  res.send(printHtml('Metal Node Demo'));
});

app.get('/jsx', (req, res) => {
  new DemoJSXComponent({message: 'An example JSX Component'});
  res.send(printHtml('Demo JSX Component'));
});

app.get('/soy', (req, res) => {
  new DemoSoyComponent({message: 'An example Soy Component'});
  res.send(printHtml('Demo Soy Component'));
});

const port = process.env.PORT ? process.env.PORT : 80;
app.listen(port, () => console.log(`listening on port ${port}`));

