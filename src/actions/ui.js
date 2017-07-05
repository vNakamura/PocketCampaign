// @flow

export const TOGGLE_SIDEBAR: string = 'TOGGLE_SIDEBAR';
export const FIX_SIDEBAR: string = 'FIX_SIDEBAR';

export type ToggleSideBarAction = {
  type: string,
  visible: boolean,
};
export type FixSideBarAction = {
  type: string,
  fixed: boolean,
};
export type SideBarAction = ToggleSideBarAction | FixSideBarAction;

export function toggleSidebar(visible: boolean): ToggleSideBarAction {
  return {
    type: TOGGLE_SIDEBAR,
    visible,
  };
}
export function fixSidebar(fixed: boolean = true): FixSideBarAction {
  return {
    type: FIX_SIDEBAR,
    fixed,
  };
}
