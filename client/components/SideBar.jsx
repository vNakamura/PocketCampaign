SideBar = React.createClass({
  propTypes: {
    open: React.PropTypes.bool.isRequired
  },

  render() {
    const sideBarClasses = ClassNames('sideBar', {open: this.props.open});
    return (
      <div className={sideBarClasses}>
        <div className="ui vertical inverted menu">
          <a className="item">
            Item 1
          </a>
          <a className="item">
            Item 2
          </a>
          <a className="item">
            Item 3
          </a>
        </div>
      </div>
    );
  }
});
