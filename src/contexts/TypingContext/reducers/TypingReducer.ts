const initialTypingState: TypingState = {
  paragraph: 'lorem ipsum dolor sit. lorem ipsum dolor sit. lorem',
  currentWordIndex: 0,
  currentType: '',
  wordCompleted: []
}

function typingReducer(state: TypingState, action: TypingAction): TypingState {
  switch (action.type) {
    case 'set_paragraph':
      return { ...state, paragraph: action.payload }
    case 'set_word_index':
      return { ...state, currentWordIndex: action.payload }
    case 'set_current_word':
      return { ...state, currentType: action.payload }
    case 'set_word_complete':
      return { ...state, wordCompleted: [...state.wordCompleted, action.payload] }
    default:
      return state
  }
}

export { initialTypingState, typingReducer }