MessageInput = React.createClass({
  getInitialState() {
    return {message: ''};
  },
  handleChange(e) {
    this.setState({message: e.target.value.trim()});
  },
  handleSubmit(e) {
    Meteor.call("sendMessage", this.state.message);
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },
  render() {
    const buttonClasses = classNames(
      "ui", "primary", "icon", "button",
      {disabled: (this.state.message.length === 0)}
    );
    return (
      <div className="ui form">
        <textarea placeholder="Mensagem..." ref="textInput" onChange={this.handleChange}></textarea>
        <div className={buttonClasses} onClick={this.handleSubmit}>
          <i className="comment icon"></i>
        </div>
      </div>
    );
  }
});
