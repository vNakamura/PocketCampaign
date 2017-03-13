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

export function setModal(content, title) {
  return {
    type: 'SET_MODAL',
    content,
    title,
  };
}

export function closeModal() {
  return setModal(null, null);
}
