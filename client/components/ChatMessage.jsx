import React from "react";

ChatMessage = React.createClass({
  render() {
    return (
      <div className="comment">
        <div className="content">
          <a className="author">Author name</a>
          <div className="metadata">
            <div className="date">
              {this.props.dateTime}
            </div>
          </div>
          <div className="text">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});
