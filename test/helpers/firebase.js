import mockery from 'mockery';

mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false
});

mockery.registerMock('firebase/database', {
  ServerValue: {
    TIMESTAMP: 't'
  }
});
