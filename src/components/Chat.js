import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, dataToJS } = helpers;

import Message from './Message';

const author = {
  name: 'Author Name',
};

@firebaseConnect([
  {
    path: 'messages',
    queryParams: [
      'orderByChild=time',
      'limitToLast=100'
    ],
  }
])
@connect(
  ({ firebase }) => ({
    messages: dataToJS(firebase, 'messages'),
  })
)
export default class Chat extends Component {
  static propTypes = {
    messages: PropTypes.object
  }

  static renderMessages(messages) {
    return Object.keys(messages).map((key) => {
      const message = messages[key];
      return <Message {... message} key={key} author={author} />;
    });
  }

  render() {
    const { messages } = this.props;
    return (
      <div>
        {
          !isLoaded(messages)
          ? 'Loading'
          : isEmpty(messages)
            ? 'Empty'
            : Chat.renderMessages(messages)
        }
      </div>
    )
  }
}
