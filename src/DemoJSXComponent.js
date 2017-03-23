import {JSXComponent} from 'metal-jsx';

class DemoJSXComponent extends JSXComponent {
  render() {
    return <h3>{this.props.message}</h3>;
  }
}

export default DemoJSXComponent;
