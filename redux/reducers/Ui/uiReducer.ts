import { UiActionTypes, UiState, TOGGLE_LOADING, TOGGLE_DARK } from './uiTypes';
const initialState: UiState = {
  isLoading: false,
  isDark: false,
};

const uiReducer = (state = initialState, { type, payload }: UiActionTypes) => {
  switch (type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case TOGGLE_DARK:
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};

export default uiReducer;
