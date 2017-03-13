function modal(state = null, action) {
  switch (action.type) {
    case 'SET_MODAL':
      return {
        content: action.content,
        title: action.title,
      };
    default:
      return state;
  }
}

export default modal;
