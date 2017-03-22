import {JSXComponent} from 'metal-jsx';

export default class DemoJSXComponent extends JSXComponent {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

export function createJSXComponent() {
  JSXComponent.render(<DemoJSXComponent message="Hello MetalJS!" />);
};
