import React from "react";

SideBar = React.createClass({
  propTypes: {
    closeHandler: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div className="sideBar">
        <div className="overlay" onTouchTap={this.props.closeHandler}/>

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
