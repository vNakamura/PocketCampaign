export const demoChar = {
  key: 'demoChar',
  name: 'Demo Char',
  classLevel: 'Fighter 1',
  race: 'Human',
  background: 'Noble',
  alignment: 'Lawful neutral',
  strength: '+3',
  dextery: '-1',
  constitution: '+2',
  intelligence: '+0',
  wisdom: '+1',
  charisma: '+2',
};

const initialChars = {
  [demoChar.key]: demoChar,
};

export default (state = initialChars, action) => {
  switch (action.type) {
    case 'CHAR_CHANGE':
      return ({
        ...state,
        demoChar: action.payload,
      });
    default:
      return state;
  }
};
