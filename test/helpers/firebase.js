import mockery from 'mockery';

mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false
});

mockery.registerMock('firebase-3-react', {
  database: function() {
    return {
      ref: function() {
        return {
          push: function() { return {} }
        };
      }
    };
  }
});

mockery.registerMock('firebase/database', {
  ServerValue: {
    TIMESTAMP: 't'
  }
});
