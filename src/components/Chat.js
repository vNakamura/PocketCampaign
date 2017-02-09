import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, helpers } from 'react-redux-firebase';

import ChatItem from './ChatItem';

const { isLoaded, isEmpty, dataToJS } = helpers;
const author = {
  name: 'Author Name',
};

@firebaseConnect(({ params }) => [
  {
    path: `chats/${params.id}`,
    queryParams: [
      'orderByChild=timestamp',
      'limitToLast=100',
    ],
  },
])
@connect(
  ({ firebase }, { params }) => ({
    content: dataToJS(firebase, `chats/${params.id}`),
  }),
)
export default class Chat extends Component {
  static propTypes = {
    content: PropTypes.object,
  }
  static defaultProps = {
    content: {},
  }

  static renderChatItems(content) {
    return Object.keys(content).map((key) => {
      const item = content[key];
      return <ChatItem content={item} key={key} author={author} />;
    });
  }

  render() {
    const { content } = this.props;
    return (
      <div>
        {
          !isLoaded(content)
          ? 'Loading'
          : isEmpty(content)
            ? 'Empty'
            : Chat.renderChatItems(content)
        }
      </div>
    );
  }
}
