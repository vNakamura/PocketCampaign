import randomString from 'random-string';

import {
  toggleSidebar,
  fixSidebar,
  changeChatInput,
  saveLastNotation,
  setContentTitle,
} from './ui';

describe('actions: ui', () => {
  it('should create an action to toggle the sidebar', () => {
    [true, false, undefined].forEach((value) => {
      expect(toggleSidebar(value)).toEqual({
        type: 'TOGGLE_SIDEBAR',
        visible: value,
      });
    });
  });
  it('should create an action to fix the sidebar', () => {
    [true, false, undefined].forEach((value) => {
      expect(fixSidebar(value)).toEqual({
        type: 'FIX_SIDEBAR',
        fixed: value === undefined ? true : value,
      });
    });
  });

  it('should create an action to change the char input', () => {
    const input = randomString();
    expect(changeChatInput(input)).toEqual({
      type: 'CHANGE_CHAT_INPUT',
      input,
    });
  });

  it('should create an action to save the last notation', () => {
    const notation = randomString();
    expect(saveLastNotation(notation)).toEqual({
      type: 'SAVE_LAST_NOTATION',
      notation,
    });
  });

  it('should create an action to set the content title', () => {
    const title = randomString();
    expect(setContentTitle(title)).toEqual({
      type: 'SET_CONTENT_TITLE',
      title,
    });
  });
});
