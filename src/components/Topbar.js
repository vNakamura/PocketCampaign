import React, { PropTypes } from 'react';
import style from './Topbar.styl';

class Topbar extends React.Component {
  noActionSet(e) {
    e.preventDefault();
    console.log('Button Action not set');
  }

  renderMenuButton(content, action = this.noActionSet) {
    return (
      content ? (<a href="#menu" onClick={action} className={style.menuButton}>{content}</a>) : null
    );
  }
  render() {
    return(
      <div className={style.container} style={this.props.style}>
        {this.renderMenuButton(this.props.leftButtonContent, this.props.leftButtonAction)}
        <h4 className={style.title}>{this.props.titleText}</h4>
        {this.renderMenuButton(this.props.rightButtonContent, this.props.rightButtonAction)}
      </div>
    );
  }
}

Topbar.propTypes = {
  titleText: PropTypes.string,
  leftButtonContent: PropTypes.element,
  rightButtonContent: PropTypes.element,
  leftButtonAction: PropTypes.func,
  rightButtonAction: PropTypes.func,
  style: Proptypes.object,
};

Topbar.defaultProps = {
  titleText: ''
};

export default Topbar;
