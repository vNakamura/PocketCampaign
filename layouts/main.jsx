MainLayout = React.createClass({
  render() {
    return (
      <div>
        <header><h1>RPG Messenger</h1></header>
        <main>{this.props.content}</main>
      </div>
    );
  }
});
