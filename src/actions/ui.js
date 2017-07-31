// @flow

export type ToggleSideBarAction = {
  type: 'TOGGLE_SIDEBAR',
  visible: boolean,
};
export type FixSideBarAction = {
  type: 'FIX_SIDEBAR',
  fixed: boolean,
};
export type SideBarAction = ToggleSideBarAction | FixSideBarAction;

export function toggleSidebar(visible: boolean): ToggleSideBarAction {
  return {
    type: 'TOGGLE_SIDEBAR',
    visible,
  };
}
export function fixSidebar(fixed: boolean = true): FixSideBarAction {
  return {
    type: 'FIX_SIDEBAR',
    fixed,
  };
}


export type ChangeChatInputAction = {
  type: 'CHANGE_CHAT_INPUT',
  input: string,
};
export type SaveLastNotationAction = {
  type: 'SAVE_LAST_NOTATION',
  notation: string,
};
export type ChatBarAction = ChangeChatInputAction | SaveLastNotationAction;

export function changeChatInput(input: string): ChangeChatInputAction {
  return {
    type: 'CHANGE_CHAT_INPUT',
    input,
  };
}
export function saveLastNotation(notation: string): ChatBarAction {
  return {
    type: 'SAVE_LAST_NOTATION',
    notation,
  };
}

export type SetContentTitleAction = {
  type: 'SET_CONTENT_TITLE',
  title: string,
};
export function setContentTitle(title: string): SetContentTitleAction {
  return {
    type: 'SET_CONTENT_TITLE',
    title,
  };
}

export type UIAction = SideBarAction | ChatBarAction | SetContentTitleAction;
