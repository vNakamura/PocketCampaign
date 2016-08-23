function sidebarVisible(state = true, action) {
  if (action.type === 'TOGGLE_SIDEBAR') {
    return !state;
  }
  return state;
}

export default sidebarVisible;
