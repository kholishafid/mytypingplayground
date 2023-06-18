import { FC, ReactNode, useReducer } from "react";
import { TypingContext } from "./TypingContext";
import { initialTypingState, typingReducer } from "./reducers/TypingReducer";

interface TypingContextProviderProps {
  children: ReactNode
}

const TypingContextProvider: FC<TypingContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(typingReducer, initialTypingState)

  return (
    <TypingContext.Provider value={{ state, dispatch }}>
      {children}
    </TypingContext.Provider>
  );
}

export default TypingContextProvider;