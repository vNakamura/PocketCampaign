import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

MainLayout = React.createClass({
  getInitialState() {
    return {
      sidebarOpen: false
    }
  },
  openSidebar() {
    this.setState({sidebarOpen: true});
  },
  closeSidebar() {
    this.setState({sidebarOpen: false});
  },
  render() {
    return (
      <div className="fullSize">
        <ReactCSSTransitionGroup transitionName="sideBarTransition" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.state.sidebarOpen?
            <SideBar open={this.state.sidebarOpen} closeHandler={this.closeSidebar}/> : ''}
        </ReactCSSTransitionGroup>
        <main className='wrapper fullSize'>
          <NavBar menuIconAction={this.openSidebar}/>

          <div className="layoutContent">
            {this.props.content}
          </div>

          <div className="messageInputBox ui menu">
            <MessageInput/>
          </div>
        </main>
      </div>
    );
  }
});
