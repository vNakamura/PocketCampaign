import React, { PropTypes } from 'react';
import { TiTimes } from 'react-icons/lib/ti';
import style from './Sidebar.styl';

// Components
import Topbar from './Topbar';

function getTopbarStyle() {
  return {
    background: 'none',
  };
}

const Sidebar = (props) =>
  <div className={style.sidebar}>
    <Topbar
      style={getTopbarStyle()}
      titleText="Pocket Campaign"
      rightButtonContent={<TiTimes />}
      rightButtonAction={props.closeButtonAction}
    />
  </div>;

Sidebar.propTypes = {
  closeButtonAction: PropTypes.func,
};

export default Sidebar;
