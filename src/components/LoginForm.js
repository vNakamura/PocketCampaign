import React, { PropTypes } from 'react';
import { firebaseConnect } from 'react-redux-firebase';


export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      error: null,
      locked: false,
    };
  }

  handleSubmit = (e) => {
    if (e) e.preventDefault();
    const { email, password } = this.state;
    this.setState({ locked: true }, () => {
      this.props.firebase.login({
        email,
        password,
      }).catch((error) => {
        this.setState({
          error,
          locked: false,
        });
      });
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

  renderError = () => {
    const { error } = this.state;
    if (error) {
      return (
        <p>Error: {error.message}</p>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.renderError()}
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            disabled={this.state.locked}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            disabled={this.state.locked}
          />
          <input
            type="submit"
            value="Sign In"
            disabled={this.state.locked}
          />
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
