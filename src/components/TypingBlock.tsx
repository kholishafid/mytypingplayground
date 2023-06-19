import { FC, useContext, useEffect, useState } from "react";
import { TypingContext } from "../contexts/TypingContext/TypingContext";
import WordBlock from "./WordBlock";
import { useType } from "../hooks/useType";

const TypingBlock: FC = () => {
  const { state } = useContext(TypingContext)
  const [currentWord, setCurrentWord] = useState<string>('')
  const [currentLength, setCurrentLength] = useState<number>(0)
  const { nextWord } = useType()

  useEffect(() => {
    setCurrentWord(state.paragraph.split(' ')[state.currentWordIndex])
  }, [state.paragraph, state.currentWordIndex])

  useEffect(() => {
    setCurrentLength(currentWord.length)
  }, [currentWord])

  return (
    <div>
      <div
        className="text-left text-sm mb-16 font-mono border border-slate-600 p-6 w-fit flex flex-col gap-2"
      >
        <div>Word : {currentWord}</div>
        <div>Length : {currentLength}</div>
        <div>Type : {state.currentType}</div>
        <div>Typed Length : {state.currentType.length}</div>
        <div>Word Index : {state.currentWordIndex}</div>
      </div>
      {state.paragraph.split(' ').map((v, i) => {
        return <WordBlock
          word={v + ' '}
          wordIndex={i}
          next={nextWord} key={i}
          wordLength={currentLength}
        />
      })}
    </div>
  );
}

export default TypingBlock;