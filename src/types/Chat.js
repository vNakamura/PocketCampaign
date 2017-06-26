export type SpeakMessage = {
  text: string,
  as?: string,
};

export type RollMessage = {
  notation: string,
};

export type Message =
| {
    kind: 'speak',
    content: SpeakMessage
  }
| {
    kind: 'roll',
    content: RollMessage
  }
;
