import { useCallback, useEffect, useRef, useState } from "react";

export default function useTypewriter(wordsToTypeOnScreen: string[]): {
  text: string;
  isDone: boolean;
} {
  const currentTimeoutId = useRef<NodeJS.Timeout>();
  const [typed, setTyped] = useState({
    wordIdx: 0,
    letterIdx: 0,
    text: "",
  });

  const typeWords = useCallback(() => {
    currentTimeoutId.current = setTimeout(() => {
      if (typed.wordIdx >= wordsToTypeOnScreen.length) {
        clearTimeout(currentTimeoutId.current);
        return;
      }

      setTyped((currentState) => {
        let wordIdxCandidate = currentState.wordIdx;
        let letterIdxCandidate = currentState.text.length === 0 ? 0 : currentState.letterIdx + 1;
        let textCandidate =
          letterIdxCandidate >= wordsToTypeOnScreen[wordIdxCandidate].length
            ? currentState.text
            : currentState.text + wordsToTypeOnScreen[wordIdxCandidate][letterIdxCandidate];

        if (letterIdxCandidate >= wordsToTypeOnScreen[currentState.wordIdx].length) {
          letterIdxCandidate = 0;
          wordIdxCandidate += 1;
          textCandidate = "";

          if (wordIdxCandidate >= wordsToTypeOnScreen.length) {
            textCandidate = wordsToTypeOnScreen.at(-1) as string;
          }
        }

        return {
          wordIdx: wordIdxCandidate,
          letterIdx: letterIdxCandidate,
          text: textCandidate,
        };
      });
    }, 200);
  }, [typed.wordIdx, wordsToTypeOnScreen]);

  useEffect(() => {
    typeWords();

    return () => {
      clearTimeout(currentTimeoutId.current);
    };
  }, [typeWords]);

  return {
    text: typed.text,
    isDone:
      typed.wordIdx === wordsToTypeOnScreen.length &&
      typed.text.length === wordsToTypeOnScreen.at(-1)?.length,
  };
}
