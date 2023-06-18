import { createContext } from "react";
import { initialTypingState } from "./reducers/TypingReducer";

export const TypingContext = createContext<TypingContextValue>({ state: initialTypingState, dispatch: () => null })
