import { FC, useContext, useEffect } from "react";
import { TypingContext } from "../contexts/TypingContext/TypingContext";

interface WordBlockProps {
  word: string
  wordIndex: number
  next: () => void
}

const WordBlock: FC<WordBlockProps> = ({ word, wordIndex, next }) => {
  const { state } = useContext(TypingContext)

  useEffect(() => {
    if (state.currentWord === word) {
      next()
    }
  }, [state.currentWord, word])

  if (state.wordCompleted.includes(wordIndex)) {
    return <span className="text-xl font-mono text-lime-400">
      {word} {' '}
    </span>
  }

  if (state.currentWordIndex === wordIndex) {
    return (
      <>
        <span className="text-xl font-mono">
          {
            word.split('').map((letter, index) => {
              return (
                <span
                  className={
                    `${letter === state.currentWord.split('')[index] ? 'text-lime-400' : ''}`
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
      <span className="text-xl font-mono">
        {word} {' '}
      </span>
    </>
  );
}

export default WordBlock;