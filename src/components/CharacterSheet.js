import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { charChange } from '../actions/chat';
import LabeledInput from './Inputs/LabeledInput';
import Scrollable from './Scrollable';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 40vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export class CharacterSheet extends Component {
  props: {
    char: { [string]: string },
    dispatch: Function,
  }

  handleInputChange = (field: string, value: string): void => {
    this.props.dispatch(charChange({
      ...this.props.char,
      [field]: value,
    }));
  }
  render() {
    const { char } = this.props;
    return (
      <Box>
        <Scrollable>
          <Row>
            <LabeledInput
              label="Name"
              onChange={this.handleInputChange}
              inputProps={{
                size: 25,
                value: char.name || '',
              }}
              flex={4}
            />
            <LabeledInput
              label="Class & Level"
              onChange={this.handleInputChange}
              inputProps={{
                size: 10,
                value: char.classLevel || '',
              }}
            />
            <LabeledInput
              label="Race"
              onChange={this.handleInputChange}
              inputProps={{
                size: 10,
                value: char.race || '',
              }}
            />
            <LabeledInput
              label="Background"
              onChange={this.handleInputChange}
              inputProps={{
                size: 10,
                value: char.background || '',
              }}
            />
            <LabeledInput
              label="Alignment"
              onChange={this.handleInputChange}
              inputProps={{
                size: 10,
                value: char.alignment || '',
              }}
            />
          </Row>
          <Row>
            <LabeledInput
              label="Strength"
              onChange={this.handleInputChange}
              inputProps={{
                size: 10,
                value: char.strength || '',
              }}
            />
            <LabeledInput
              label="Dextery"
              onChange={this.handleInputChange}
              inputProps={{
                size: 10,
                value: char.dextery || '',
              }}
            />
            <LabeledInput
              label="Constitution"
              onChange={this.handleInputChange}
              inputProps={{
                size: 10,
                value: char.constitution || '',
              }}
            />
            <LabeledInput
              label="Intelligence"
              onChange={this.handleInputChange}
              inputProps={{
                size: 10,
                value: char.intelligence || '',
              }}
            />
            <LabeledInput
              label="Wisdom"
              onChange={this.handleInputChange}
              inputProps={{
                size: 10,
                value: char.wisdom || '',
              }}
            />
            <LabeledInput
              label="Charisma"
              onChange={this.handleInputChange}
              inputProps={{
                size: 10,
                value: char.charisma || '',
              }}
            />
          </Row>
        </Scrollable>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  char: state.chars.demoChar,
});
export default connect(mapStateToProps)(CharacterSheet);
