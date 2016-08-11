import React, { PropTypes } from 'react';
import style from './Topbar.styl';
import { TiThMenu } from 'react-icons/lib/ti'

class Topbar extends React.Component {
  onMenuButtonClick (e) {
    e.preventDefault();
    console.log("Menu Button clicked");
  }

  renderMenuButton () {
    return(
      <a href="#" onClick={this.onMenuButtonClick.bind()} className={style.menuButton}><TiThMenu/></a>
    );
  }
  render () {
    return(
      <div className={style.container}>
        {this.props.showMenuButton? this.renderMenuButton() : ""}
        <h4 className={style.title}>{this.props.titleText}</h4>
      </div>
    );
  }
}

Topbar.propTypes = {
  showMenuButton: PropTypes.bool,
  titleText: PropTypes.string
}

Topbar.defaultProps = {
  showMenuButton: false,
  titleText: ''
}

export default Topbar;
