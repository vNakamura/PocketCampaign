import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import TiTimes from 'react-icons/lib/ti/times';
import style from './Sidebar.styl';

// Components
import Topbar from './Topbar';

const topbarStyle = {
  background: 'none',
};

const Sidebar = props =>
  <div className={style.container}>
    <div className={style.overlay} onClick={props.closeButtonAction} />
    <div className={style.sidebar}>
      <Topbar
        style={topbarStyle}
        titleText="Pocket Campaign"
        rightButtonContent={props.closeButtonAction && <TiTimes />}
        rightButtonAction={props.closeButtonAction}
      />
      <ul>
        <li>
          <Link to="/">Typography test</Link>
        </li>
        <li>
          <Link to="/chat/asd">Chat</Link>
        </li>
        <button onClick={props.signOutAction}>Sign Out</button>
      </ul>
    </div>
  </div>;

Sidebar.propTypes = {
  closeButtonAction: PropTypes.func,
  signOutAction: PropTypes.func,
};
Sidebar.defaultProps = {
  closeButtonAction: null,
  signOutAction: null,
};

export default Sidebar;
