import deepFreeze from 'deep-freeze';

import usersReducer, { demoUser, currentUser } from './users';

describe('reducer: users', () => {
  describe('currentUser', () => {
    it('should have demoUser as default', () => {
      const newState = currentUser(undefined, { type: 'INIT' });
      expect(newState).toBe(demoUser);
    });

    it('return the given state when an unrelated action is dispatched', () => {
      const frozenState = deepFreeze({});
      const result = currentUser(frozenState, { type: 'UNRELATED_ACTION' });
      expect(result).toBe(frozenState);
    });
  });

  describe('users list', () => {
    it('should have demoUser in the default list', () => {
      const newState = usersReducer(undefined, { type: 'INIT' });
      expect(newState).toHaveProperty(demoUser.key, demoUser);
    });

    it('return the given state when an unrelated action is dispatched', () => {
      const frozenState = deepFreeze({
        foo: {
          bar: true,
        },
      });
      const result = usersReducer(frozenState, { type: 'UNRELATED_ACTION' });
      expect(result).toBe(frozenState);
    });
  });
});
