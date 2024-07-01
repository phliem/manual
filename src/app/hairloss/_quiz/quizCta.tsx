"use client";

import Quiz from "./quiz";
import { useQuizContext } from "../_data/quiz.context";

export default function QuizCta() {
  const { step, setStep } = useQuizContext();

  const handleStart = () => {
    setStep(1);
    document.body.classList.add("overflow-y-hidden");
  };

  return (
    <>
      {step === 0 ? (
        <button
          type="button"
          className="btn-primary mt-6"
          onClick={handleStart}
        >
          Take the Quiz
        </button>
      ) : (
        <Quiz />
      )}
    </>
  );
}
