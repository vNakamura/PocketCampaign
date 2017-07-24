// @flow

import type { Message } from './Chat';

export type UIState = {|
  sidebar: {|
    visible: boolean,
    fixed: boolean,
  |},
  chatbar: {|
    currentInput: string,
    lastNotation: string,
  |},
|};

export type ChatState = {
  [room: string]: {
    [key: string]: Message,
  },
};

export type UserState = {|
  key: string,
  name: string,
|};

export type State = {|
  ui: UIState,
  chat: ChatState,
  currentUser: UserState,
|};
