NavBar = React.createClass({
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
      <div className={navBarClasses}>
        <i className="sidebar link icon"></i>
      <p className="title">{this.props.title}</p>
        <i className="info circle link icon"></i>
      </div>
    )
  }
});
