// @flow

export type SpeakMessage = {
  kind: 'speak',
  text: string,
  createdAt: number,
  author: string,
};

export type RollMessage = {
  kind: 'roll',
  notation: string,
  createdAt: number,
  author: string,
};

export type Message = SpeakMessage | RollMessage;
