Chat = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {messages:[]};
    var msgs = Meteor.subscribe('messages');
    if(msgs.ready()) {
      data.messages = Messages.find({}).fetch();
    }
    return data;
  },
  renderMessage(message) {
    const dt = moment(message.createdAt).format('HH:mm');
    return (
      <ChatMessage key={message._id} authorName="Fulano" dateTime={dt}>
        {message.text}
      </ChatMessage>
    );
  },
  render() {
    return (
      <div className="chatWindow">
        <div className="ui comments">
          {this.data.messages.map(this.renderMessage)}
        </div>
        <div className="messageInputBox ui bottom fixed menu">
          <MessageInput />
        </div>
      </div>
    );
  }
});
