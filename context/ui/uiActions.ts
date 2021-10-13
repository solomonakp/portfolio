import { UiActionTypes, TOGGLE_LOADING, TOGGLE_OPEN } from './uiTypes'

export const toggleLoading = (): UiActionTypes => {
  return {
    type: TOGGLE_LOADING,
  }
}

export const toggleOpen = (): UiActionTypes => {
  return {
    type: TOGGLE_OPEN,
  }
}
