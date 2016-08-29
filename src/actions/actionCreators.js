import { database } from '../config';

const dataRef = database().ref('messages');

export function toggleSidebar() {
  return {
    type: 'TOGGLE_SIDEBAR',
  };
}

export function setSidebarVisibility(visible) {
  return {
    type: 'SET_SIDEBAR_VISIBILITY',
    visible,
  };
}

export function sendMessage(text) {
  dataRef.push({
    text,
    time: database.ServerValue.TIMESTAMP,
  });

  return {
    type: 'SEND_MESSAGE',
    text,
  };
}
