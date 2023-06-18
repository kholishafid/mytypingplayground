import { FC, ReactNode } from "react";

interface LetterBlockProps {
  children: ReactNode
}

const LetterBlock: FC<LetterBlockProps> = ({ children }) => {
  return (
    <span className="text-xl font-mono">{children}</span>
  );
}

export default LetterBlock;