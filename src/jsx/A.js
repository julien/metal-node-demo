import {JSXComponent} from 'metal-jsx';

class C extends JSXComponent {
  render() {
    return <div>C</div>;
  }
}

class B extends JSXComponent {
  render() {
    return <div>B<C/></div>;
  }
}

class A extends JSXComponent {
  render() {
    return <div>A<B/></div>;
  }
}

export default A;
