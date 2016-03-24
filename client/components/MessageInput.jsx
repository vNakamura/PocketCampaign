MessageInput = React.createClass({
  getInitialState() {
    return {message: ''};
  },
  handleChange(e) {
    this.setState({message: e.target.value.trim()});
  },
  handleKeyUp(e) {
    this.handleChange(e);
    if(e.keyCode === 13) {
      e.preventDefault();
      this.handleSubmit();
    }
  },
  handleSubmit(e) {
    if(this.state.message.length){
      Meteor.call("sendMessage", this.state.message);
      ReactDOM.findDOMNode(this.refs.textInput).value = "";
      this.setState({message: ""});
    }
  },
  handleFocus(e) {
    this.handleChange(e);
    window.scrollTo(0,document.body.scrollHeight);
  },
  render() {
    const buttonClasses = ClassNames(
      "ui", "primary", "icon", "button",
      {disabled: (this.state.message.length === 0)}
    );
    return (
      <div className="ui fluid action input">
        <input type="text" placeholder="Mensagem..." ref="textInput" onChange={this.handleChange} onFocus={this.handleFocus} onKeyUp={this.handleKeyUp}></input>
        <div className={buttonClasses} onTouchTap={this.handleSubmit}>
          <i className="comment icon"></i>
        </div>
      </div>
    );
  }
});
