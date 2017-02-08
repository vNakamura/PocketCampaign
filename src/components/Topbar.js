import React, { PropTypes } from 'react';
import style from './Topbar.styl';

class Topbar extends React.Component {
  static propTypes = {
    titleText: PropTypes.string,
    leftButtonContent: PropTypes.element,
    rightButtonContent: PropTypes.element,
    leftButtonAction: PropTypes.func,
    rightButtonAction: PropTypes.func,
    style: PropTypes.object,
  }

  static defaultProps = {
    titleText: '',
    leftButtonContent: null,
    rightButtonContent: null,
    leftButtonAction: null,
    rightButtonAction: null,
    style: {},
  }

  static noActionSet(e) {
    e.preventDefault();
  }

  static renderMenuButton(content, action = Topbar.noActionSet) {
    return (
      content ?
        (<button
          onClick={action}
          className={style.menuButton}
        >
          {content}
        </button>)
      : null
    );
  }
  render() {
    return (
      <div className={style.container} style={this.props.style}>
        {Topbar.renderMenuButton(this.props.leftButtonContent, this.props.leftButtonAction)}
        <h4 className={style.title}>{this.props.titleText}</h4>
        {Topbar.renderMenuButton(this.props.rightButtonContent, this.props.rightButtonAction)}
      </div>
    );
  }
}

export default Topbar;
