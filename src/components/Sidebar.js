import React, {PropTypes} from 'react';
import style from './Sidebar.styl';

// Components
import Topbar from './Topbar';
import { TiTimes } from 'react-icons/lib/ti';

class Sidebar extends React.Component {
  getTopbarStyle() {
    return {
      background: "none"
    };
  }
  render () {
    return (<div className={style.sidebar}>
        <Topbar
          style={this.getTopbarStyle()}
          titleText="Pocket Campaign"
          rightButtonContent={<TiTimes />}
          rightButtonAction={this.props.closeButtonAction}
        />
      </div>);
  }
}

Sidebar.propTypes = {
  closeButtonAction: PropTypes.func
}

export default Sidebar;
