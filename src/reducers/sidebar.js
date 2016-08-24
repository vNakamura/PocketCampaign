function sidebarVisible(state = true, action) {
  switch (action.type) {
    case 'SET_SIDEBAR_VISIBILITY':
      return action.visible;
    case 'TOGGLE_SIDEBAR':
      return !state;
    default:
      return state;
  }
}

export default sidebarVisible;
