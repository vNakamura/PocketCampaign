// @flow

export const TOGGLE_SIDEBAR: string = 'TOGGLE_SIDEBAR';
export const FIX_SIDEBAR: string = 'FIX_SIDEBAR';

export function toggle_sidebar(visible: boolean): {type: string, visible: ?boolean} {
  return {
    type: TOGGLE_SIDEBAR,
    visible
  };
};
export function fix_sidebar(fixed: boolean = true): {type: string, fixed: boolean} {
  return {
    type: FIX_SIDEBAR,
    fixed
  };
};
