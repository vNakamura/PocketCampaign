Characters = new Mongo.Collection("characters");
Character = Astro.Class({
  name: 'Character',
  collection: Characters,
  fields: {
    name: {
      type: 'string',
      validator: [
        Validators.required(),
        Validators.string(),
        Validators.minLength(3),
        Validators.maxLength(20)
      ]
    },
    playerId: {
      type: 'string',
      validator: [
        Validators.required()
      ]
    },
    campaignId: {
      type: 'string',
      validator: [
        Validators.required()
      ]
    }
  }
});
