import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import TiTimes from 'react-icons/lib/ti/times';
import style from './Sidebar.styl';

// Components
import Topbar from './Topbar';

const topbarStyle = {
  background: 'none',
};

const Sidebar = (props) =>
  <div className={style.container}>
    <div className={style.overlay} onClick={props.closeButtonAction} />
    <div className={style.sidebar}>
      <Topbar
        style={topbarStyle}
        titleText="Pocket Campaign"
        rightButtonContent={props.closeButtonAction ? <TiTimes /> : null}
        rightButtonAction={props.closeButtonAction}
      />
      <ul>
        <li>
          <Link to="/">Typography test</Link>
        </li>
        <li>
          <Link to="/chat/asd">Chat</Link>
        </li>
      </ul>
    </div>
  </div>;

Sidebar.propTypes = {
  closeButtonAction: PropTypes.func,
};

export default Sidebar;
