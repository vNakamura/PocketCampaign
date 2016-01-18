Chat = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      messages: Messages.find({}).fetch()
    }
  },
  renderMessages() {
    return this.data.messages.map((message) => {
      return <div className="comment" key={message._id}>
          <div className="content">
            <a className="author">Author name</a>
            <div className="metadata">
              <div className="date">
                {moment(message.created_at).fromNow(true)}
              </div>
            </div>
            <div className="text">{message.text}</div>
          </div>
        </div>
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
