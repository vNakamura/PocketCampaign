// @flow

export type SpeakMessage = {
  kind: 'speak',
  text: string,
  createdAt: number,
};

export type RollMessage = {
  kind: 'roll',
  notation: string,
  createdAt: number,
};

export type Message = SpeakMessage | RollMessage;
