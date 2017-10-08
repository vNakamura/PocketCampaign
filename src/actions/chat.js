// @flow

import type { SpeakMessage, RollMessage } from '../types/Chat';

export type ChatAction = {
  type: string,
  room: string,
  message: SpeakMessage | RollMessage,
};

export function speak(room: string, text: string, author: string): ChatAction {
  const message: SpeakMessage = {
    kind: 'speak',
    text,
    createdAt: Date.now(),
    author,
  };
  return {
    type: 'SPEAK',
    room,
    message,
  };
}

export function rollDice(room: string, notation: string, author: string): ChatAction {
  const message: RollMessage = {
    kind: 'roll',
    notation,
    createdAt: Date.now(),
    author,
  };
  return {
    type: 'ROLL_DICE',
    room,
    message,
  };
}

export function charChange(payload: { [string]: string }) {
  return {
    type: 'CHAR_CHANGE',
    payload,
  };
}

export const clearTutorialHistory = { type: 'CLEAR_TUTORIAL_HISTORY' };
