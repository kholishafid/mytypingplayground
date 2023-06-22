import { RefObject } from "react"

type TypingState = {
  paragraph: string
  wordArray: string[]
  currentWord: string
  currentWordIndex: number
  currentTyped: string
  caretCursor: RefObject<HTMLSpanElement> | null
  currentWordElement: RefObject<HTMLSpanElement> | null
}

type TypingFuncPayload = {
  typed: string
}

type TypingAction =
  | { type: 'SET_PARAGRAPH', payload: string }
  | { type: 'SET_WORD_ARR', payload: string[] }
  | { type: 'SET_TYPED', payload: string }
  | { type: 'SET_WORD', payload: string }
  | { type: 'INCREASE_WORD_INDEX' }
  | { type: 'SET_CURSOR', payload: RefObject<HTMLSpanElement> }
  | { type: 'SET_WORD_ELEMENT', payload: RefObject<HTMLSpanElement> }
  | { type: 'TYPING_FUNC', payload: TypingFuncPayload }

const typingInitialState: TypingState = {
  paragraph: 'Loren ipsum dolor sit amet adiplicit lorem ipsum dolor sit amet',
  wordArray: [],
  currentWord: '',
  currentWordIndex: 0,
  currentTyped: '',
  caretCursor: null,
  currentWordElement: null
}

const TypingFunc = (state: TypingState, payload: TypingFuncPayload): TypingState => {

  let index = state.currentWordIndex
  const letterCollection = state.currentWordElement?.current?.getElementsByTagName('span')
  const currentLetterIndex = payload.typed.length - 1
  const currentLetterTyped = payload.typed.split('')[currentLetterIndex]
  const cursor = state.caretCursor?.current


  if (state.currentWord.length === payload.typed.length && state.currentWord !== '') {
    index += 1
  }

  if (letterCollection) {

    [...letterCollection].map((spanEl, i) => {

      if (i === currentLetterIndex) {
        spanEl.textContent === currentLetterTyped
          ? spanEl.classList.add('correct')
          : spanEl.classList.add('wrong')
        const rect = spanEl.getBoundingClientRect()

        if (cursor) {
          cursor.style.position = 'fixed'
          cursor.style.top = `${rect.top - 2}px`
          cursor.style.left = `${rect.right}px`
        }
      }
      if (i > currentLetterIndex) {
        spanEl.setAttribute('class', '')
      }
      if (payload.typed.length === 0 && cursor) {
        const rect = letterCollection[0].getBoundingClientRect()
        cursor.style.top = `${rect.top - 2}px`
        cursor.style.left = `${rect.left}px`
      }
    })
  }


  return { ...state, currentTyped: payload.typed, currentWordIndex: index }
}

const typingReducer = (state: TypingState, action: TypingAction): TypingState => {
  switch (action.type) {
    case 'SET_PARAGRAPH':
      return { ...state, paragraph: action.payload }
    case 'SET_WORD':
      return { ...state, currentWord: action.payload }
    case 'SET_WORD_ARR':
      return { ...state, wordArray: action.payload }
    case 'INCREASE_WORD_INDEX':
      return { ...state, currentWordIndex: state.currentWordIndex + 1 }
    case 'SET_TYPED':
      return { ...state, currentTyped: action.payload }
    case 'SET_CURSOR':
      return { ...state, caretCursor: action.payload }
    case 'SET_WORD_ELEMENT':
      return { ...state, currentWordElement: action.payload }
    case 'TYPING_FUNC':
      return TypingFunc(state, action.payload)
    default:
      return state
  }
}

export type { TypingState, TypingAction }
export { typingInitialState, typingReducer }