import deepFreeze from 'deep-freeze';
import values from 'lodash/values';

import chatReducer, { initialState } from './chat';

describe('reducer: chat', () => {
  describe('common', () => {
    it('should return initial state of none id given', () => {
      const newState = chatReducer(undefined, { type: 'INIT' });
      expect(newState).toBe(initialState);
    });

    it('return the given state when an unrelated action is dispatched', () => {
      const frozenState = deepFreeze({
        foo: {
          bar: true,
        },
      });
      const result = chatReducer(frozenState, { type: 'UNRELATED_ACTION' });
      expect(result).toBe(frozenState);
    });
  });

  describe('on SPEAK', () => {
    const message = { text: 'Hello' };
    it('should create an object for the room if it don\'t exists before adding the message', () => {
      const result = chatReducer(undefined, {
        type: 'SPEAK',
        room: 'testRoom',
        message,
      });
      expect(result).toHaveProperty('testRoom');
      expect(values(result.testRoom)).toContain(message);
    });
    const frozenState = deepFreeze({
      testRoom: {},
      anotherRoom: {},
    });
    it('should add the message to the room', () => {
      const result = chatReducer(frozenState, {
        type: 'SPEAK',
        room: 'testRoom',
        message,
      });
      expect(result).toHaveProperty('anotherRoom');
      expect(values(result.testRoom)).toContain(message);
    });
  });

  describe('on ROLL_DICE', () => {
    const message = { notation: '1d6+2' };
    it('should create an object for the room if it don\'t exists before adding the message', () => {
      const result = chatReducer(undefined, {
        type: 'ROLL_DICE',
        room: 'testRoom',
        message,
      });
      expect(result).toHaveProperty('testRoom');
      expect(values(result.testRoom)).toContain(message);
    });
    const frozenState = deepFreeze({
      testRoom: {},
      anotherRoom: {},
    });
    it('should add the message to the room', () => {
      const result = chatReducer(frozenState, {
        type: 'ROLL_DICE',
        room: 'testRoom',
        message,
      });
      expect(result).toHaveProperty('anotherRoom');
      expect(values(result.testRoom)).toContain(message);
    });
  });

  describe('on CLEAR_TUTORIAL_HISTORY', () => {
    const someContent = {};
    const anotherContent = {};
    const frozenState = deepFreeze({
      tutorial: {
        someContent,
      },
      anotherRoom: {
        anotherContent,
      },
    });
    it('should add the message to the room', () => {
      const result = chatReducer(frozenState, {
        type: 'CLEAR_TUTORIAL_HISTORY',
      });
      expect(result).toHaveProperty('anotherRoom');
      expect(values(result.anotherRoom)).toContain(anotherContent);
      expect(values(result)).not.toContain(someContent);
    });
  });
});
