Meteor.methods({
  sendMessage(text) {
    check(text, String);
    var m = new Message({
      text
    });
    m.save();
  }
});
