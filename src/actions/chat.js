// @flow

export const SEND_MESSAGE: string = 'SEND_MESSAGE';

export function send_message(room: string, text: string): {type: string, room: string, text: string} {
  return {
    type: SEND_MESSAGE,
    room,
    text,
  };
};
