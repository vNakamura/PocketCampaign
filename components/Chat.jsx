Chat = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      messages: Messages.find({}).fetch()
    }
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
      <div>
        <div className="ui comments">
          {this.renderMessages()}
        </div>
        <div className="ui bottom fixed menu">
          <MessageInput />
        </div>
      </div>
    );
  }
});
