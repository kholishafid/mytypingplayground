import { FC, useContext, useEffect, useRef } from "react";
import { TypingContext } from "../contexts/TypingContext/TypingContextProvider";
import { useKeyboard } from "../hooks/useKeyboard";
import WordBlock from "./WordBlock";

const TypingBlock: FC = () => {
  const { state, dispatch } = useContext(TypingContext)
  const caretCursor = useRef<HTMLSpanElement>(null)
  useKeyboard()

  useEffect(() => {
    const splitParagraph = (): string[] => {
      return state.paragraph.split(' ')
    }

    dispatch({ type: 'SET_WORD_ARR', payload: splitParagraph().map((letter) => letter + ' ') })
  }, [dispatch, state.paragraph])

  useEffect(() => {
    dispatch({ type: 'SET_WORD', payload: state.wordArray[state.currentWordIndex] })
  }, [state.currentWordIndex, dispatch, state.wordArray])

  useEffect(() => {
    dispatch({ type: 'SET_CURSOR', payload: caretCursor })
  }, [dispatch])

  return (
    <>
      <section className="fixed inset-0 grid place-items-center">
        <div className="font-mono text-2xl font-light max-w-xl leading-10 text-start relative flex flex-wrap">
          <span
            className="w-0.5 h-8 bg-orange-400 inline-block absolute -left-0.5 top-[2px] animate-pulse"
            ref={caretCursor}
          ></span>
          {state.wordArray.map((word, index) => {
            return <WordBlock word={word} key={index} index={index} />
          })}
        </div>
      </section>
    </>
  );
}

export default TypingBlock;