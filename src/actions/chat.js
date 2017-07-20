// @flow

import type { Message } from '../types/Chat';

export const SPEAK: string = 'SPEAK';
export const ROLL_DICE: string = 'ROLL_DICE';

export type ChatAction = {
  type: string,
  room: string,
} & Message;

export function speak(room: string, text: string): ChatAction {
  return {
    type: SPEAK,
    room,
    kind: 'speak',
    content: {
      text,
    },
  };
}

export function rollDice(room: string, notation: string): ChatAction {
  return {
    type: ROLL_DICE,
    room,
    kind: 'roll,',
    content: {
      notation,
    },
  };
}
