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
  return {
    type: 'SEND_MESSAGE',
    text,
  };
}
