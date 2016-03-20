MainLayout = React.createClass({
  getInitialState() {
    return {
      isStandalone: false
    }
  },

  componentWillMount() {
    this.setState({
      isStandalone: Meteor.isClient? window.navigator.standalone : false
    });
  },

  render() {
    const navBarClasses = ClassNames('navBar', {withStatus: this.state.isStandalone});
    return (
      <main className="wrapper">
        <div className={navBarClasses}>
          <i className="sidebar link icon"></i>
          <p className="title">Testando</p>
          <i className="info circle link icon"></i>
        </div>

        <div className="layoutContent">
          {this.props.content}
        </div>

        <div className="messageInputBox ui menu">
          <MessageInput />
        </div>
      </main>
    );
  }
});
