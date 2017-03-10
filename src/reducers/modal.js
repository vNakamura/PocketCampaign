function modalContent(state = null, action) {
  switch (action.type) {
    case 'SET_MODAL':
      return action.content;
    default:
      return state;
  }
}

export default modalContent;
