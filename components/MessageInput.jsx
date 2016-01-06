MessageInput = React.createClass({
  getInitialState() {
    return {message: ''};
  },
  handleChange(e) {
    this.setState({message: e.target.value.trim()});
  },
  render() {
    const buttonClasses = classNames(
      "ui", "primary", "button",
      {disabled: (this.state.message.length === 0)}
    );
    return (
      <div className="ui action input">
        <input placeholder="Mensagem..." type="text" onChange={this.handleChange} />
        <div  className={buttonClasses}>Enviar</div>
      </div>
    );
  }
});
