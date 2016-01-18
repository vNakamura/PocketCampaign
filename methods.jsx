Meteor.methods({
  sendMessage(text) {
    check(text, String);
    Messages.insert({
      text,
      created_at: new Date()
    });
  }
});
