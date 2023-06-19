type TypingState = {
  paragraph: string
  currentWordIndex: number
  currentType: string
  wordCompleted: number[]
}

type TypingAction = { type: 'set_paragraph'; payload: string; }
  | { type: 'set_word_index'; payload: number }
  | { type: 'set_current_word'; payload: string }
  | { type: 'set_word_complete'; payload: number }
