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
    const wrapperClasses = ClassNames('wrapper', 'fullSize', {dimmed: this.state.sidebarOpen});
    return (
      <div className="fullSize">
        <SideBar open={this.state.sidebarOpen}/>
        <main className={wrapperClasses}>
          <div className="overlay" onClick={this.closeSidebar}/>
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
