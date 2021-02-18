import { UiActionTypes, TOGGLE_DARK, TOGGLE_LOADING } from './uiTypes';
export const toggleDark = (): UiActionTypes => {
  return {
    type: TOGGLE_DARK,
  };
};

export const toggleLoading = (): UiActionTypes => {
  return {
    type: TOGGLE_LOADING,
  };
};
