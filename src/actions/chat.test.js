import randomString from 'random-string';
import timekeeper from 'timekeeper';

import { speak, rollDice, clearTutorialHistory } from './chat';

describe('actions: chat', () => {
  it('should create an action to add a speak message', () => {
    timekeeper.freeze();
    const text = randomString();
    const author = randomString();
    const room = randomString();
    const message = {
      kind: 'speak',
      text,
      createdAt: Date.now(),
      author,
    };
    const expectedAction = {
      type: 'SPEAK',
      message,
      room,
    };
    expect(speak(room, text, author)).toEqual(expectedAction);
    timekeeper.reset();
  });
  it('should create an action to add a roll message', () => {
    timekeeper.freeze();
    const notation = randomString();
    const author = randomString();
    const room = randomString();
    const message = {
      kind: 'roll',
      notation,
      createdAt: Date.now(),
      author,
    };
    const expectedAction = {
      type: 'ROLL_DICE',
      message,
      room,
    };
    expect(rollDice(room, notation, author)).toEqual(expectedAction);
    timekeeper.reset();
  });
  it('should have an constant action to clear tutorial room', () => {
    const expectedAction = {
      type: 'CLEAR_TUTORIAL_HISTORY',
    };
    expect(clearTutorialHistory).toEqual(expectedAction);
  });
});
