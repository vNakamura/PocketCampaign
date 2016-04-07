MainLayout = React.createClass({
  render() {
    return (
      <main className="wrapper">
        <NavBar/>

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