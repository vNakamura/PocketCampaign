Chat = React.createClass({
  render() {
    return (
      <div>
        <div className="chat-messages">
          Messages...
        </div>
        <div className="ui bottom fixed menu">
          <MessageInput />
        </div>
      </div>
    );
  }
});
