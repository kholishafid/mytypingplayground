import { useContext, useEffect, useState } from "react";
import { TypingContext } from "../contexts/TypingContext/TypingContextProvider";

export function useKeyboard() {
  const { state, dispatch } = useContext(TypingContext)
  const [typed, setTyped] = useState<string>('')

  useEffect(() => {
    document.addEventListener('keydown', (ev: KeyboardEvent) => {
      ev.preventDefault()
      if (ev.key.length === 1) {
        setTyped((word) => word + ev.key)
      }
      if (ev.key === 'Backspace') {
        setTyped((word) => word.slice(0, -1))
      }
    })
  }, [])

  useEffect(() => {
    dispatch({ type: 'TYPING_FUNC', payload: { typed: typed } })
  }, [dispatch, typed])

  useEffect(() => {
    setTyped('')
  }, [state.currentWordIndex])
}