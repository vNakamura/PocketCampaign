import concat from 'lodash/concat';

function messages(state = [], action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return concat(state, action.text);
    default:
      return state;
  }
}

export default messages;
