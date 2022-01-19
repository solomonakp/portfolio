import { createContext, FC, ReactNode, useReducer, useContext } from 'react'
import { initialState, State, UiActionTypes, Dispatch } from './uiTypes'

const UiContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

const uiReducer = (state: State, action: UiActionTypes) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return {
        ...state,
        isLoading: !state.isLoading,
      }

    case 'TOGGLE_OPEN':
      return {
        ...state,
        isOpen: !state.isOpen,
      }

    default:
      return state
  }
}

type ProviderProps = {
  children: ReactNode
}

export const UiProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  return (
    <UiContext.Provider value={{ state, dispatch }}>
      {children}
    </UiContext.Provider>
  )
}

export const useUi = () => {
  const context = useContext(UiContext)

  return context
}
