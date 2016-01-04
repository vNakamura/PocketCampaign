UserProfile = Astro.Class({
  name: 'UserProfile',
  fields: {
    nickname: 'string'
  }
});

User = Astro.Class({
  name: 'User',
  collection: Meteor.users,
  fields: {
    createdAt: 'date',
    emails: 'array',
    default() {
      return [];
    }
  },
  profile: {
    type: 'object',
    neted: 'UserProfile',
    default() {
      return {};
    }
  }
});

if(Meteor.isServer){
  User.extend({
    fields: {
      services: 'object'
    }
  });
}
