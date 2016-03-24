NavBar = React.createClass({
  propTypes: {
    menuIconAction: React.PropTypes.func.isRequired
  },

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
        <i
          className="sidebar link icon"
          onTouchTap={this.props.menuIconAction}
        ></i>
        <p className="title">Testando</p>
        <i className="info circle link icon"></i>
      </div>
    )
  }
});
