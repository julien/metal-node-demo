import Component from 'metal-component';
import Soy from 'metal-soy';
import core from 'metal';
import templatesA from './A.soy.js';
import templatesB from './B.soy.js';
import templatesC from './C.soy.js';

class C extends Component {}
Soy.register(C, templatesC);
class B extends Component {}
Soy.register(B, templatesB);
class A extends Component {}
Soy.register(A, templatesA);

export default A;
