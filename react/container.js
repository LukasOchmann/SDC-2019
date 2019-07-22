import Button from '../components/Button';

export default class ClassyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonOneClick = this.onButtonOneClick.bind(this);
    this.onButtonTwoClick = this.onButtonTwoClick.bind(this);
    this.onButtonThreeClick = this.onButtonThreeClick.bind(this);
  }

  onButtonOneClick() {
    // do something
  }
  onButtonTwoClick() {
    // do something
  }
  onButtonThreeClick() {
    // do something
  }
  render() {
    return (
      <div>
        <Button onClick={this.onButtonOneClick()} />
        <Button onClick={this.onButtonTwoClick()} style="danger" />
        <Button onClick={this.onButtonThreeClick()} style="warning" />
      </div>
    );
  }
}
