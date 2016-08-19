import lint from 'mocha-eslint';

lint([
  'src/**/*.js',
  '!src/components/stories/*.js',
], {
  // Increase the timeout of the test if linting takes to long
  timeout: 5000,  // Defaults to the global mocha `timeout` option

  // Increase the time until a test is marked as slow
  slow: 1000,  // Defaults to the global mocha `slow` option
});
