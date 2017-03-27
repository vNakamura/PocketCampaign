import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pathToJS, firebaseConnect } from 'react-redux-firebase';
import SignOutIcon from 'react-icons/lib/fa/sign-out';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';

export const SidebarProfile = ({ auth, firebase }) => {
  const displayName = auth.displayName || auth.email;
  return (<div>
    <Link to="/me">{displayName}</Link>
    <button onClick={firebase.logout}>
      <SignOutIcon />
    </button>
    <Avatar
      name={displayName}
      email={auth.email}
    />
  </div>);
};

SidebarProfile.propTypes = {
  auth: PropTypes.object,
  firebase: PropTypes.shape({
    logout: PropTypes.func.isRequired,
  }).isRequired,
};

SidebarProfile.defaultProps = {
  auth: {},
};

function mapStateToProps({ firebase }) {
  return {
    auth: pathToJS(firebase, 'auth'),
  };
}
export default connect(mapStateToProps)(firebaseConnect()(SidebarProfile));
