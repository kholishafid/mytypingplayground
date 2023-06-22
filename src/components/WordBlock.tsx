import { FC, useContext, useEffect, useRef } from "react";
import { TypingContext } from "../contexts/TypingContext/TypingContextProvider";

interface WordBlockProps {
  word: string
  index: number
}

const WordBlock: FC<WordBlockProps> = ({ word, index }) => {
  const { state, dispatch } = useContext(TypingContext)
  const wordBlockElement = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (wordBlockElement.current) {
      dispatch({ type: 'SET_WORD_ELEMENT', payload: wordBlockElement })
    }
  }, [dispatch, state.currentWordIndex])

  return (
    <>
      <span ref={index === state.currentWordIndex ? wordBlockElement : null}>
        {word.split('').map((letter, i) => {
          if (letter === ' ') {
            return <span key={i}>&nbsp;</span>
          }
          return (
            <span key={i}>{letter}</span>
          )
        })}
      </span>
    </>
  );
}

export default WordBlock;