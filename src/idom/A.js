const Component = require('metal-component').default;
const IncrementalDomRenderer = require('metal-incremental-dom').default;

const elementOpen = IncrementalDOM.elementOpen;
const elementClose = IncrementalDOM.elementClose;
const text = IncrementalDOM.text;

class AIDom extends Component {
  render() {
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
  }
}
AIDom.RENDERER = IncrementalDomRenderer;
export default AIDom;

