import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setModal } from '../actions/actionCreators';
import DiceRollModal from './modals/diceRoll';

export class NotationLink extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.setModal(<DiceRollModal notation={this.props.notation} />, 'Roll Dice');
  }

  render() {
    return (
      <a
        href="#notationModal"
        onClick={this.handleClick}
      >
        {this.props.notation}
      </a>
    );
  }
}

NotationLink.propTypes = {
  notation: PropTypes.string.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => bindActionCreators({ setModal }, dispatch),
)(NotationLink);
