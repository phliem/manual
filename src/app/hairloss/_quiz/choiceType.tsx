"use client";

import { useQuizContext } from "../_data/quiz.context";
import type { OptionType } from "./question.types";

export default function ChoiceType({ options }: { options: OptionType[] }) {
  const { step, setStep, answers, setAnswers, setIsRejected } =
    useQuizContext();

  const handleSelection = (value: string | boolean, isRejection: boolean) => {
    if (isRejection) {
      setIsRejected(true);
    }
    setAnswers([...answers, value]);
    setStep(step + 1);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {options.map(({ display, value, isRejection }: OptionType) => {
        const isImage = display.includes("<img");
        return (
          <div
            key={display}
            className={`bg-white border border-brand-400 hover:opacity-60 transition-opacity rounded-lg ${
              isImage ? "" : "col-span-2 md:col-span-1 md:col-start-2"
            }`}
          >
            {isImage ? (
              <button
                type="button"
                className="p-2"
                onClick={() => handleSelection(value, isRejection)}
              >
                <div dangerouslySetInnerHTML={{ __html: display }} />
              </button>
            ) : (
              <button
                type="button"
                className="py-4 px-16"
                onClick={() => handleSelection(value, isRejection)}
              >
                <div dangerouslySetInnerHTML={{ __html: display }} />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
