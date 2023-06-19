import { FC, useContext, useEffect } from "react";
import { TypingContext } from "../contexts/TypingContext/TypingContext";

interface WordBlockProps {
  word: string
  wordIndex: number
  next: (currentType: string, currentWord: string) => void
  wordLength: number
}

const WordBlock: FC<WordBlockProps> = ({ word, wordIndex, next, wordLength }) => {
  const { state } = useContext(TypingContext)

  useEffect(() => {
    if (state.currentType.length === wordLength + 1) {
      next(state.currentType, word)
    }
  }, [state.currentType, word])

  if (state.wordCompleted.includes(wordIndex)) {
    return <span className="text-2xl font-mono text-lime-400">
      {word} {' '}
    </span>
  }

  if (state.currentWordIndex === wordIndex) {
    return (
      <>
        <span className="text-2xl font-mono">
          {
            word.split('').map((letter, index) => {
              return (
                <span
                  className={
                    `relative ${letter === state.currentType.split('')[index] ? 'text-lime-400' : ''} 
                     ${state.currentType.length === index ? 'cursor-a' : ''}`
                  }
                  key={index}>
                  {letter}
                </span>
              )
            })
          } {' '}
        </span>
      </>
    )
  }

  return (
    <>
      <span className="text-2xl font-mono">
        {word} {' '}
      </span>
    </>
  );
}

export default WordBlock;