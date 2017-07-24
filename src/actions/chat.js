// @flow

import type { SpeakMessage, RollMessage } from '../types/Chat';

export type ChatAction = {
  type: string,
  room: string,
  message: SpeakMessage | RollMessage,
};

export function speak(room: string, text: string): ChatAction {
  const message: SpeakMessage = {
    kind: 'speak',
    text,
    createdAt: Date.now(),
  };
  return {
    type: 'SPEAK',
    room,
    message,
  };
}

export function rollDice(room: string, notation: string): ChatAction {
  const message: RollMessage = {
    kind: 'roll',
    notation,
    createdAt: Date.now(),
  };
  return {
    type: 'ROLL_DICE',
    room,
    message,
  };
}
