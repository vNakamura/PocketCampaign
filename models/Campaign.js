Campaigns = new Mongo.Collection("campaigns");
Campaign = Astro.Class({
  name: 'Campaign',
  collection: Campaigns,
  fields: {
    title: {
      type: 'string',
      validator: [
        Validators.required(),
        Validators.string(),
        Validators.minLength(3),
        Validators.maxLength(50)
      ]
    },
    gmId: {
      type: 'string',
      validator: [
        Validators.required()
      ]
    }
  },
  relations: {
    gm: {
      type: 'one',
      class: 'User',
      local: 'gmId',
      foreign: '_id'
    },
    heroes: {
      type: 'many',
      class: 'Hero',
      local: '_id',
      foreign: 'campaignId'
    },
    messages: {
      type: 'many',
      class: 'Message',
      local: '_id',
      foreign: 'campaignId'
    }
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    },
    slug: {
      fieldName: 'title',
      methodName: null,
      slugFieldName: 'slug',
      canUpdate: true,
      unique: true,
      separator: '-'
    }
  }
});
