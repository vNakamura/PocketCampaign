export type SpeachMessage = {
  text: string,
  as?: string,
};

export type RollMessage = {
  notation: string,
};

export type Message =
| {
    kind: 'speach',
    content: SpeachMessage
  }
| {
    kind: 'roll',
    content: RollMessage
  }
;
