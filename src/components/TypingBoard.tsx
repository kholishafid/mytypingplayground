import { FC, useContext } from "react";
import { TypingContext } from "../contexts/TypingContext/TypingContextProvider";


const TypingBoard: FC = () => {
  const { state } = useContext(TypingContext)
  return (
    <aside className="border border-stone-600 p-8 flex flex-col gap-4 w-fit absolute top-0 left-0 font-mono items-start">
      <p>current Word : {state.currentWord}</p>
      <p className="relative">
        <span className="mr-2">current Typed :</span>{state.currentTyped}
        <span className="w-0.5 h-5 inline-block bg-orange-400 animate-pulse absolute top-[2px]"></span>
      </p>
      <p>current WordIndex: {state.currentWordIndex}</p>
    </aside>
  );
}

export default TypingBoard;