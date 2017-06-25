// @flow

import type {Message} from './Chat';

export type UIState = {
  +sidebar: {
    +visible: boolean,
    +fixed: boolean,
  },
};

export type ChatState = {
  +[string]: Message,
};

export type State = {
  +ui: UIState,
  +chat: ChatState,
};
