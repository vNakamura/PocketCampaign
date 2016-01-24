Chat = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {};
    var msgs = Meteor.subscribe('messages');
    if(msgs.ready()) {
      data.messages = Messages.find({}).fetch();
    }
    return data;
  },
  renderMessages() {
    return this.data.messages.map((message) => {
      const dt = moment(message.createdAt).format('HH:mm');
      return (
        <ChatMessage key={message._id} authorName="Fulano" dateTime={dt}>
          {message.text}
        </ChatMessage>
      );
    });
  },
  render() {
    return (
      <div className="chatWindow">
        <div className="ui comments">
          {this.renderMessages()}
        </div>
        <div className="messageInputBox ui bottom fixed menu">
          <MessageInput />
        </div>
      </div>
    );
  }
});
