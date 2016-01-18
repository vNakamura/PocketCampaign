Messages = new Mongo.Collection('messages');
Message = Astro.Class({
  name: 'Message',
  collection: Messages,
  fields: {
    text: {
      type: 'string',
      validator: [
        Validators.required()
      ]
    },
    userId: {
      type: 'string',
      validator: [
        Validators.required()
      ]
    },
    characterId: 'string',
    campaignId: {
      type: 'string',
      validator: [
        Validators.required()
      ]
    }
  },
  relations: {
    user: {
      type: 'one',
      class: 'User',
      local: 'userId',
      foreign: '_id'
    },
    character: {
      type: 'one',
      class: 'Character',
      local: 'characterId',
      foreign: '_id'
    },
    campaign: {
      type: 'one',
      class: 'User',
      local: 'campaignId',
      foreign: '_id'
    }
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    }
  }
});
