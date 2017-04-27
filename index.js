const express = require('express');
const app = express();

const jsdom = require('jsdom');
global.document = jsdom.jsdom();
global.window = global.document.defaultView;

const Component = require('metal-component').default;
const IncrementalDomRenderer = require('metal-incremental-dom').default;

const AJSX = require('./dist/src/jsx/A').default;
const ASoy = require('./dist/src/soy/A').default;
const AIDom = require('./dist/src/idom/A').default;

Component.renderToString = function(ctor, data) {
  let stack = [];
  let patch = IncrementalDOM.patch;
  IncrementalDOM.patch = function() {
    let currentElement = patch.apply(null, arguments);
    stack.push(currentElement.innerHTML);
    IncrementalDOM.patch = patch;
  };
  Component.render(ctor, data);
  return stack[0];
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

