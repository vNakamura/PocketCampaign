// @flow

import React from 'react';
import styled from 'styled-components';

import type { RollMessage } from '../../types/Chat';
import { roll } from '../../helpers/dice';
import type { RollResult } from '../../helpers/dice';
import type { Theme } from '../../theme';
import CommonLayoutWithAvatar from './CommonLayoutWithAvatar';

type Props = {
  byMe: ?boolean,
  theme: Theme,
};

const Container = styled.div`
  margin: .2em;
  text-align: ${(props: Props) => (props.byMe ? 'right' : 'left')};
`;

const Text = styled.p`
  margin: 0;
  font-size: .8em;
`;

const Result = styled.span`
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.4em;
  margin: .2em 0;
  padding: .2em;
  line-height: 1;
  display: inline-block;
`;

const ResultDie = styled(Result)`
  background-color: ${props => props.theme.chat.rollResultBg};
  color: ${props => props.theme.chat.rollResultText};
  border-radius: ${props => props.theme.chat.rollRadius};
`;

const ResultModifier = styled(ResultDie)`
  background-color: ${props => props.theme.chat.rollModifierBg};
  color: ${props => props.theme.chat.rollModifierText};
`;

const ResultTotal = styled(ResultDie)`
  background-color: ${props => props.theme.chat.rollTotalBg};
  color: ${props => props.theme.chat.rollTotalText};
`;

const renderRoll = (notation: string, seed: string) => {
  const result: RollResult = roll(notation, seed);
  if (!result.ok) return result.message;
  const styledResult = [];
  if (result.rolls.length > 1 || result.modifier !== 0) {
    result.rolls.forEach((r, i) => {
      if (i > 0) {
        styledResult.push(<Result
          key={styledResult.length}
        >+</Result>);
      }
      styledResult.push(<ResultDie key={styledResult.length}>{r}</ResultDie>);
    });
    if (result.modifier !== 0) {
      styledResult.push(<Result key={styledResult.length}>
        {result.modifier > 0 ? '+' : '-'}
      </Result>);
      styledResult.push(<ResultModifier
        key={styledResult.length}
      >{Math.abs(result.modifier)}</ResultModifier>);
    }
    styledResult.push(<Result
      key={styledResult.length}
    >=</Result>);
  }
  styledResult.push(<ResultTotal key={styledResult.length}>{result.total}</ResultTotal>);
  return styledResult;
};

const DiceRoll = (props: {message: RollMessage}) => (
  <CommonLayoutWithAvatar byMe>
    <Container byMe>
      <Text>
        Rolling {props.message.notation}:
      </Text>
      {renderRoll(props.message.notation, props.message.createdAt.toString())}
    </Container>
  </CommonLayoutWithAvatar>
);

export default DiceRoll;
