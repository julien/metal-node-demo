const express = require('express');
const app = express();

const jsdom = require('jsdom');
global.document = jsdom.jsdom();
global.window = global.document.defaultView;

const metal = {
  core: require('metal').core,
  component: require('metal-component'),
  dom: require('metal-dom'),
  incrementalDom: require('metal-incremental-dom'),
  jsx: require('metal-jsx')
};
const incrementalDomString = require('./vendor/virtual_elements');
const getOutput = incrementalDomString.getOutput;

// Components
const DemoIncrementalDOMComponent = require('./DemoIncrementalDOMComponent');
const DemoJSXComponent = require('./lib/src/DemoJSXComponent').default;

// routes
// ------
// add a static route for our public assets
app.use(express.static('public'));

app.get('/', (req, res) => {

  new DemoIncrementalDOMComponent({element: document.body});

  const html = `<!doctype html>
    <html>
      <head>
        <title>Metal Node Demo</title>
      </head>
      <body>
        ${getOutput()}

      </body>
    </html>`;

  res.send(html);
});


app.get('/jsx', (req, res) => {

  new DemoJSXComponent({message: 'Hola JSX', element: document.body});

  const html = `<!doctype html>
  <html>
    <head>
      <title>Demo JSX Component</title>
    </head>
    <body>
      ${getOutput()}
    </body>
  </html>`;

  res.send(html);
});

const port = process.env.PORT ? process.env.PORT : 80;
app.listen(port, () => console.log(`listening on port ${port}`));

