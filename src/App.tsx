import './App.css'
import TypingBlock from './components/TypingBlock'
import TypingContextProvider from './contexts/TypingContext/TypingContextProvider'


function App() {
  return (
    <TypingContextProvider>
      <TypingBlock />
    </TypingContextProvider>
  )
}

export default App
