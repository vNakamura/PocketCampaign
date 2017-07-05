export type SpeakMessage = {
  text: string,
  as?: string,
};

export type RollMessage = {
  notation: string,
};

type MessageKind =
  | {
      kind: 'speak',
      content: SpeakMessage,
    }
  | {
      kind: 'roll',
      content: RollMessage,
    };

export type Message = { createdAt: number } & MessageKind;
