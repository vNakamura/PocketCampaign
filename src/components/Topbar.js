import React, { PropTypes } from 'react';
import style from './Topbar.styl';

class Topbar extends React.Component {
  handleMenuButtonClick (e) {
    e.preventDefault();
    this.props.menuButtonAction();
  }

  noActionSet() {
    console.log("Button Action not set");
  }

  renderMenuButton (content, action) {
    return(
      content? (<a href="#" onClick={action.bind(this)} className={style.menuButton}>{content}</a>) : ""
    );
  }
  render () {
    return(
      <div className={style.container}>
        {this.renderMenuButton(this.props.leftButtonContent, this.props.leftButtonAction)}
        <h4 className={style.title}>{this.props.titleText}</h4>
        {this.renderMenuButton(this.props.rightButtonContent, this.props.rightButtonAction)}
      </div>
    );
  }
}

Topbar.propTypes = {
  titleText:          PropTypes.string,
  leftButtonContent:  PropTypes.element,
  rightButtonContent: PropTypes.element,
  leftButtonAction:   PropTypes.func,
  rightButtonAction:  PropTypes.func
}

Topbar.defaultProps = {
  titleText:         '',
  leftButtonAction:  Topbar.noActionSet,
  rightButtonAction: Topbar.noActionSet
}

export default Topbar;
