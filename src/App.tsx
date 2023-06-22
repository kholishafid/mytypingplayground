import './App.css'
import TypingBlock from './components/TypingBlock'
import TypingBoard from './components/TypingBoard'
import TypingProvider from './contexts/TypingContext/TypingContextProvider'


function App() {
  return (
    <TypingProvider>
      <TypingBoard />
      <TypingBlock />
    </TypingProvider>
  )
}

export default App
