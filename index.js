const express = require('express');
const app = express();

const jsdom = require('jsdom');
global.document = jsdom.jsdom();
global.window = global.document.defaultView;

const Component = require('metal-component').default;
const IncrementalDomRenderer = require('metal-incremental-dom').default;

// This must be after metal component dependencies, to overwride original
// incremental dom imported inside the dependency files.
global.IncrementalDOM = require('./vendor/virtual_elements');

const AJSX = require('./dist/src/jsx/A').default;
const ASoy = require('./dist/src/soy/A').default;
const AIDom = require('./dist/src/idom/A').default;

Component.renderToStringStack = [];

let originalPatch = IncrementalDOM.patch;
IncrementalDOM.patch = function() {
  let currentElement = originalPatch.apply(null, arguments);
  Component.renderToStringStack.push(currentElement.innerHTML);
};

Component.renderToString = function(ctor, data) {
  Component.renderToStringStack = [];
  Component.render(ctor, data);
  return Component.renderToStringStack[0];
};

app.get('/', (req, res) => {
  res.send(Component.renderToString(AIDom));
});

app.get('/jsx', (req, res) => {
  res.send(Component.renderToString(AJSX));
});

app.get('/soy', (req, res) => {
  res.send(Component.renderToString(ASoy));
});

app.listen(8080, () => console.log(`listening on port 8080`));

