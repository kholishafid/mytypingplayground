import { FC, useContext } from "react";
import { TypingContext } from "../contexts/TypingContext/TypingContext";
import WordBlock from "./WordBlock";
import { useType } from "../hooks/useType";

const TypingBlock: FC = () => {
  const { state } = useContext(TypingContext)
  const { nextWord } = useType()

  return (
    <div>
      <div>{state.currentWord}</div>
      {state.paragraph.split(' ').map((v, i) => {
        return <WordBlock word={v + ' '} wordIndex={i} next={nextWord} key={i} />
      })}
    </div>
  );
}

export default TypingBlock;