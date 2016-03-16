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
      <main className="fillHeight">
        <div className={navBarClasses}>
          <p>Testando</p>
        </div>
        {this.props.content}
      </main>
    );
  }
});
