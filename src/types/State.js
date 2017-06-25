export type State = {
  ui: {
    sidebar: {
      visible: boolean,
      fixed: boolean,
    },
  },
  chat: {
    [string]: {
      text: string
    },
  }
};
