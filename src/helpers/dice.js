// @flow

import React from 'react';
import droll from 'droll';
import seedrandom from 'seedrandom';
import replace from 'string-replace-to-array';

import NotationLink from '../components/Chat/NotationLink';

export const notationLimits = {
  minNumDice: 1,
  maxNumDice: 10,
  minNumSides: 2,
  maxNumSides: 100,
  minModifier: -1000,
  maxModifier: 1000,
};
export const diceNotationRegex = /\b([1-9]\d*)?d([1-9]\d*)([+-]\d+)?\b/gi;

type ResultError = {
  ok: false,
  message: string,
};
type ValidateResult = ResultError | { ok: true };
const validateRoll = (notation:string): ValidateResult => {
  const p = droll.parse(notation);
  if (!p) return { ok: false, message: 'Invalid dice notation' };
  if (p.numDice > notationLimits.maxNumDice) return { ok: false, message: 'Invalid dice notation. Too many dice!' };
  if (p.numSides < notationLimits.minNumDice) return { ok: false, message: 'Invalid dice notation. You need at least one die!' };
  if (p.numSides > notationLimits.maxNumSides) return { ok: false, message: 'Invalid dice notation. Too many sides!' };
  if (p.numSides < notationLimits.minNumSides) return { ok: false, message: 'Invalid dice notation. Too few sides!' };
  if (p.modifier > notationLimits.maxModifier) return { ok: false, message: 'Invalid dice notation. Modifier is too big!' };
  if (p.modifier < notationLimits.minModifier) return { ok: false, message: 'Invalid dice notation. Modifier is too big!' };
  return { ok: true };
};

export type ParseResult = ResultError | {
  ok: true,
  parsed: {
    numDice: number,
    numSides: number,
    modifier: number,
    minResult: number,
    maxResult: number,
    avgResult: number,
  }
};
export const parseRoll = (notation: string): ParseResult => {
  const v = validateRoll(notation);
  if (!v.ok) return v;
  const p = droll.parse(notation);
  return { ok: true, parsed: p };
};

export type RollResult = ResultError | {
  ok: true,
  rolls: number[],
  modifier: number,
  total: number,
};
export const roll = (notation: string, seed?: string): RollResult => {
  const v = validateRoll(notation);
  if (!v.ok) return v;

  if (seed !== undefined) seedrandom(seed, { global: true });
  const result = droll.roll(notation);
  return {
    ok: true,
    rolls: result.rolls,
    modifier: result.modifier,
    total: result.total,
  };
};

export const addLinksToText = (text: string) => {
  let i = 0;
  const result = replace(
    text,
    diceNotationRegex,
    (notation, numDice, numSides) => {
      i += 1;
      const v: ValidateResult = validateRoll(notation);
      if (v.ok && numSides > 1) return <NotationLink key={i} notation={notation} />;
      return notation;
    },
  );
  return result;
};
