import deepFreeze from 'deep-freeze';

import uiReducer, { initialState } from './ui';

describe('reducer: ui', () => {
  describe('common', () => {
    it('should return initial state of none id given', () => {
      const newState = uiReducer(undefined, { type: 'INIT' });
      expect(newState).toBe(initialState);
    });

    it('return the given state when an unrelated action is dispatched', () => {
      const frozenState = deepFreeze({
        foo: {
          bar: true,
        },
      });
      const result = uiReducer(frozenState, { type: 'UNRELATED_ACTION' });
      expect(result).toBe(frozenState);
    });
  });

  describe('on FIX_SIDEBAR', () => {
    const frozenState = deepFreeze({
      sidebar: {
        fixed: true,
      },
    });
    it('should change the value to the one given by the action', () => {
      let result = uiReducer(frozenState, { type: 'FIX_SIDEBAR', fixed: false });
      expect(result.sidebar.fixed).toBe(false);
      result = uiReducer(deepFreeze(result), { type: 'FIX_SIDEBAR', fixed: false });
      expect(result.sidebar.fixed).toBe(false);
      result = uiReducer(deepFreeze(result), { type: 'FIX_SIDEBAR', fixed: true });
      expect(result.sidebar.fixed).toBe(true);
      result = uiReducer(deepFreeze(result), { type: 'FIX_SIDEBAR', fixed: true });
      expect(result.sidebar.fixed).toBe(true);
    });
    it('should toggle the value if none is given by the action', () => {
      let result = uiReducer(frozenState, { type: 'FIX_SIDEBAR' });
      expect(result.sidebar.fixed).toBe(false);
      result = uiReducer(deepFreeze(result), { type: 'FIX_SIDEBAR' });
      expect(result.sidebar.fixed).toBe(true);
    });
  });

  describe('on TOGGLE_SIDEBAR', () => {
    const frozenState = deepFreeze({
      sidebar: {
        visible: true,
      },
    });
    it('should change the value to the one given by the action', () => {
      let result = uiReducer(frozenState, { type: 'TOGGLE_SIDEBAR', visible: false });
      expect(result.sidebar.visible).toBe(false);
      result = uiReducer(deepFreeze(result), { type: 'TOGGLE_SIDEBAR', visible: false });
      expect(result.sidebar.visible).toBe(false);
      result = uiReducer(deepFreeze(result), { type: 'TOGGLE_SIDEBAR', visible: true });
      expect(result.sidebar.visible).toBe(true);
      result = uiReducer(deepFreeze(result), { type: 'TOGGLE_SIDEBAR', visible: true });
      expect(result.sidebar.visible).toBe(true);
    });
    it('should toggle the value if none is given by the action', () => {
      let result = uiReducer(frozenState, { type: 'TOGGLE_SIDEBAR' });
      expect(result.sidebar.visible).toBe(false);
      result = uiReducer(deepFreeze(result), { type: 'TOGGLE_SIDEBAR' });
      expect(result.sidebar.visible).toBe(true);
    });
  });

  describe('on CHANGE_CHAT_INPUT', () => {
    const frozenState = deepFreeze({
      chatbar: {
        currentInput: 'anotherValue',
      },
    });
    it('should change the value to the one given by the action', () => {
      let result = uiReducer(frozenState, { type: 'CHANGE_CHAT_INPUT', input: 'speak' });
      expect(result.chatbar.currentInput).toBe('speak');
      result = uiReducer(deepFreeze(result), { type: 'CHANGE_CHAT_INPUT', input: 'roll' });
      expect(result.chatbar.currentInput).toBe('roll');
    });
  });

  describe('on SAVE_LAST_NOTATION', () => {
    const frozenState = deepFreeze({
      chatbar: {
        lastNotation: 'anotherValue',
      },
    });
    it('should change the value to the one given by the action', () => {
      let result = uiReducer(frozenState, { type: 'SAVE_LAST_NOTATION', notation: 'd20+1' });
      expect(result.chatbar.lastNotation).toBe('d20+1');
      result = uiReducer(deepFreeze(result), { type: 'SAVE_LAST_NOTATION', notation: '2d6-3' });
      expect(result.chatbar.lastNotation).toBe('2d6-3');
    });
  });

  describe('on SET_CONTENT_TITLE', () => {
    const frozenState = deepFreeze({ chatbar: '' });
    it('should change the value to the one given by the action', () => {
      let result = uiReducer(frozenState, { type: 'SET_CONTENT_TITLE', title: 'Test' });
      expect(result.contentTitle).toBe('Test');
      result = uiReducer(deepFreeze(result), { type: 'SET_CONTENT_TITLE', title: '💩' });
      expect(result.contentTitle).toBe('💩');
    });
  });
});
