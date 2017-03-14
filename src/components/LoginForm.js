import React, { PropTypes } from 'react';
import { firebaseConnect } from 'react-redux-firebase';


export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    if (e) e.preventDefault();
    const { email, password } = this.state;
    this.props.firebase.login({
      email,
      password,
    });
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
          />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired,
  }).isRequired,
};

export default firebaseConnect()(LoginForm);
