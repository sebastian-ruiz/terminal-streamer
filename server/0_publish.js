terminal        = new Meteor.Collection("terminal");

Meteor.publish('terminal', function() {
  return terminal.find();
});

terminal.allow({
  insert: function(userId, doc) {
    return (userId && Accounts.findUserByUsername("admin")._id === userId);
  },
  remove: function(userId, doc) {
    return (userId && Accounts.findUserByUsername("admin")._id === userId);
  },
  update: function(userId, doc, fields, modifier) {
    return (userId && Accounts.findUserByUsername("admin")._id === userId);
  }
});