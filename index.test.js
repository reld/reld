const reld = require('./index');
const reldProfile = require('./reldProfile');

test('logs reld information', () => {
  expect(reld()).toBe(reldProfile);
});