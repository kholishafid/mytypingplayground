import { useContext, useEffect, useState } from "react"
import { TypingContext } from "../contexts/TypingContext/TypingContext"

interface useTypeI {
  key: string,
  nextWord: (currentType: string, currentWord: string) => void,
}

export function useType(): useTypeI {
  const { state, dispatch } = useContext(TypingContext)
  const [key, setKey] = useState<string>('')

  useEffect(() => {
    document.addEventListener('keydown', (ev: KeyboardEvent) => {
      ev.preventDefault()
      if (ev.key.length === 1) {
        setKey(key => key + ev.key)
      }
      if (ev.key === 'Backspace') {
        setKey(key => key.slice(0, -1))
      }
    })
  }, [])

  const nextWord = (currentType: string, currentWord: string) => {
    setKey('')
    if (currentType === currentWord) {
      dispatch({ type: 'set_word_complete', payload: state.currentWordIndex })
    }
    dispatch({ type: 'set_word_index', payload: state.currentWordIndex + 1 })
  }

  useEffect(() => {
    dispatch({ type: 'set_current_word', payload: key })
  }, [key])

  return { key, nextWord }
}