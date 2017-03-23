import Component from 'metal-component';
import Soy from 'metal-soy';
import core from 'metal';
import templates from './DemoSoyComponent.soy.js';

class DemoSoyComponent extends Component {}

DemoSoyComponent.STATE = {
  message: {
    validator: core.isString,
    value: 'Demo Soy Component'
  }
};

Soy.register(DemoSoyComponent, templates);

export default DemoSoyComponent;
