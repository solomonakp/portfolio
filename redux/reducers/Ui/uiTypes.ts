export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const TOGGLE_DARK = 'TOGGLE_DARK';

interface ToggleLoadingAction {
  type: typeof TOGGLE_LOADING;
  payload?: undefined;
}

interface ToggleDarkAction {
  type: typeof TOGGLE_DARK;
  payload?: undefined;
}

export interface UiState {
  isLoading: boolean;
  isDark: boolean;
}

export type UiActionTypes = ToggleDarkAction | ToggleLoadingAction;
