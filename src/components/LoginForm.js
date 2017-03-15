import React, { PropTypes } from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

import style from './Forms.styl';

function checkEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      error: null,
      locked: false,
      recover: true,
    };
  }

  handleSubmit = (e) => {
    if (e) e.preventDefault();
    const { email, password } = this.state;
    if (checkEmail(email) && password.length) {
      this.setState({ locked: true, error: null }, () => {
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
    } else {
      this.setState({
        error: {
          message: 'Please fill the fields above correctly',
        },
        locked: false,
      });
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  sendRecoverMail = (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (checkEmail(email)) {
      this.setState({ locked: true, error: null }, () => {
        this.props.firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          this.setState({
            error: {
              isSuccess: true,
              message: `Recovery mail sent to "${email}"`,
            },
            locked: false,
          });
        }, (error) => {
          this.setState({
            error,
            locked: false,
          });
        });
      });
    } else {
      this.setState({
        error: {
          message: 'Please fill the "Email" field with a valid email address',
        },
        locked: false,
      });
    }
  }

  renderError = () => {
    const { error } = this.state;
    if (error) {
      const cn = classNames({
        [style.error]: true,
        [style.success]: error.isSuccess,
      });
      return (
        <p className={cn}>{error.isSuccess ? '' : 'Error: '}{error.message}</p>
      );
    }
    return null;
  }

  render() {
    return (
      <div className={style.center}>
        <form
          className={style.formBox}
          onSubmit={this.handleSubmit}
        >
          <ReactCSSTransitionGroup
            transitionName={style}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={200}
          >
            {this.renderError()}
          </ReactCSSTransitionGroup>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={this.handleChange}
            disabled={this.state.locked}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={this.handleChange}
            disabled={this.state.locked}
          />
          <p className={style.recover}>
            <a
              href="#recover"
              onClick={this.sendRecoverMail}
            >Forgot your password?</a>
          </p>
          <input
            type="submit"
            value="Login"
            disabled={this.state.locked}
          />
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  firebase: PropTypes.shape({
    auth: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }).isRequired,
};

export default firebaseConnect()(LoginForm);
