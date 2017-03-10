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

export function setModal(content) {
  return {
    type: 'SET_MODAL',
    content,
  };
}

export function closeModal() {
  setModal(null);
}
