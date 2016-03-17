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
    const navBarClasses = ClassNames('navBar', {statusPadding: this.state.isStandalone});
    return (
      <main className="wrapper">
        <div className={navBarClasses}>
          <p className="title">Testando</p>
        </div>

        <div className="content">
          {this.props.content}
        </div>

        <div className="messageInputBox ui menu">
          <MessageInput />
        </div>
      </main>
    );
  }
});
