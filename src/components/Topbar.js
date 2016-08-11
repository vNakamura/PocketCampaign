import React, { PropTypes } from 'react';
import style from './Topbar.styl';
import { TiThMenu } from 'react-icons/lib/ti'

class Topbar extends React.Component {
  handleMenuButtonClick (e) {
    e.preventDefault();
    this.props.menuButtonAction();
  }

  renderMenuButton () {
    return(
      <a href="#" onClick={this.handleMenuButtonClick.bind(this)} className={style.menuButton}><TiThMenu/></a>
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
  showMenuButton:   PropTypes.bool,
  titleText:        PropTypes.string,
  menuButtonAction: PropTypes.func
}

Topbar.defaultProps = {
  showMenuButton:   false,
  titleText:        '',
  menuButtonAction: function(){console.log("Menu Button Action not set");}
}

export default Topbar;
