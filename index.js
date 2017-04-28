const express = require('express');
const app = express();

global.window = {};

const Component = require('metal-component').default;
const AJSX = require('./dist/src/jsx/A').default;
const ASoy = require('./dist/src/soy/A').default;
const AIDom = require('./dist/src/idom/A').default;

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

