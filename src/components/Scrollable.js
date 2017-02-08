import React, { PropTypes, Component } from 'react';
import style from './Scrollable.styl';

// This needs to be a full componets because its parent uses ref
// eslint-disable-next-line react/prefer-stateless-function
class Scrollable extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className={style.scrollable}>
        {this.props.children}
      </div>
    );
  }
}

export default Scrollable;
