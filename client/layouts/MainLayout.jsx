MainLayout = React.createClass({
  render() {
    return (
      <main className="wrapper">
        <NavBar title={this.props.title}/>

        <div className="layoutContent">
          {this.props.content}
        </div>

        <div className="messageInputBox ui menu">
          <MessageInput/>
        </div>
      </main>
    );
  }
});
