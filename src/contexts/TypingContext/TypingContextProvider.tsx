import { FC, ReactNode, createContext, useReducer } from "react";
import { TypingAction, TypingState, typingInitialState, typingReducer } from "../../reducers/TypingReducer";

type Action = (action: TypingAction) => void

export const TypingContext = createContext<{ state: TypingState, dispatch: Action }>({
  state: typingInitialState,
  dispatch: () => null
})

interface TypingProviderProps {
  children: ReactNode
}

const TypingProvider: FC<TypingProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(typingReducer, typingInitialState)

  return (
    <TypingContext.Provider value={{ state, dispatch }}>
      {children}
    </TypingContext.Provider>
  );
}

export default TypingProvider;