export const TOGGLE_LOADING = 'TOGGLE_LOADING'
export const TOGGLE_OPEN = 'TOGGLE_OPEN'

interface ToggleLoadingAction {
  type: typeof TOGGLE_LOADING
}

interface ToggleOpenAction {
  type: typeof TOGGLE_OPEN
}

export const initialState = {
  isLoading: true,
  isOpen: false,
}

export type State = typeof initialState

export type UiActionTypes = ToggleLoadingAction | ToggleOpenAction

export type Dispatch = (action: UiActionTypes) => void
