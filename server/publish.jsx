Meteor.publish("messages", function (limit) {
  var l = 100;
  if(limit){
    check(limit, Number);
    l = limit;
  }
  return Messages.find({}, {order: {createdAt:1}, limit: l});
});
