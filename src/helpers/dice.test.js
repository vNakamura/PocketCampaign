import React from 'react';
import { shallow } from 'enzyme';
import { parseRoll, roll, addLinksToText } from './dice';
import NotationLink from '../components/Chat/NotationLink';

describe('helpers: dice', () => {
  describe('parseRoll', () => {
    it('should reject ivalid notations', () => {
      expect(parseRoll('d').ok).toBe(false);
      expect(parseRoll('1d').ok).toBe(false);
      expect(parseRoll('1da').ok).toBe(false);
      expect(parseRoll('1d20b').ok).toBe(false);
    });
    it('should reject notations with extreme values', () => {
      expect(parseRoll('0d6').ok).toBe(false);
      expect(parseRoll('50d6').ok).toBe(false);
      expect(parseRoll('2d1').ok).toBe(false);
      expect(parseRoll('2d500').ok).toBe(false);
      expect(parseRoll('2d20+99999').ok).toBe(false);
      expect(parseRoll('2d20-99999').ok).toBe(false);
    });
    it('should accept valid notations', () => {
      expect(parseRoll('d2').ok).toBe(true);
      expect(parseRoll('2d6').ok).toBe(true);
      expect(parseRoll('5d20+100').ok).toBe(true);
      expect(parseRoll('10d100-500').ok).toBe(true);
    });
  });
  describe('roll', () => {
    it('should validate notations before rolling', () => {
      const invalidRoll = roll('d');
      expect(invalidRoll.ok).toBe(false);
      expect(invalidRoll.message).toBeDefined();
      expect(invalidRoll.rolls).toBeUndefined();
      expect(invalidRoll.modifier).toBeUndefined();
      expect(invalidRoll.total).toBeUndefined();

      const validRoll = roll('d6');
      expect(validRoll.ok).toBe(true);
      expect(validRoll.message).toBeUndefined();
      expect(validRoll.rolls).toBeDefined();
      expect(validRoll.modifier).toBeDefined();
      expect(validRoll.total).toBeDefined();
    });

    it('should return the same result when given the same seed', () => {
      const result1 = roll('10d20', 1234);
      const result2 = roll('10d20', 1234);
      expect(result1).toMatchObject(result2);

      const result3 = roll('10d20', 1234);
      const result4 = roll('10d20', 1235);
      expect(result3).not.toMatchObject(result4);
    });

    it('should roll the exact number of dice in the notation', () => {
      const result = roll('10d10');
      expect(result.rolls).toHaveLength(10);
    });

    it('should add the given modifier to the rolls', () => {
      const notation = '10d6';
      const noModifier = roll(notation, 1);
      const withModifier = roll(`${notation}+50`, 1);
      const withNegativeModifier = roll(`${notation}-50`, 1);

      expect(noModifier.modifier).toBe(0);
      expect(withModifier.modifier).toBe(50);
      expect(withModifier.total - noModifier.total).toBe(50);
      expect(withNegativeModifier.modifier).toBe(-50);
      expect(withNegativeModifier.total - noModifier.total).toBe(-50);
    });
  });
  describe('addLinksToText', () => {
    it('should add the NotationLink component to texts with notation', () => {
      const textWithLinks = addLinksToText('Roll d20+3 for initiative.');
      expect(textWithLinks).toMatchSnapshot();
      expect(shallow(<p>{textWithLinks}</p>).find(NotationLink)).toHaveLength(1);
    });
    it('should NOT add the NotationLink component to texts when notation has too big values', () => {
      const textWithLinks = addLinksToText('Roll d200+3 for initiative.');
      expect(textWithLinks).toMatchSnapshot();
      expect(shallow(<p>{textWithLinks}</p>).find(NotationLink)).toHaveLength(0);
    });
    it('should accept multiple notations', () => {
      const textWithLinks = addLinksToText('2d10+10, 5D6, 100d20; 1d or d100.');
      expect(textWithLinks).toMatchSnapshot();
      expect(shallow(<p>{textWithLinks}</p>).find(NotationLink)).toHaveLength(3);
    });
  });
});
