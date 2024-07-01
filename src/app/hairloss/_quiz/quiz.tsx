"use client";

import { useQuizContext } from "../_data/quiz.context";
import Question from "./question";
import Icon from "../_icons/icon";
import { useEffect } from "react";
import Ended from "./ended";
import Rejected from "./rejected";

export default function Quiz() {
  const {
    questions,
    step,
    setStep,
    answers,
    setAnswers,
    isRejected,
    setIsRejected,
  } = useQuizContext();

  if (!questions || !questions.length) {
    throw new Error("The quiz does not contain any questions");
  }

  const isEnded = step > questions.length;
  const current = questions[step - 1];

  useEffect(() => {
    if (isRejected || isEnded) {
      // TODO Implement: Ticket number (ie: DS-458) - Send answers to backend
      console.log("Submitting answers to Backend...", answers);
    }
  }, [isRejected, isEnded, answers]);

  const handlePrevious = () => {
    // Remove previous anwser
    const editAnswers = [...answers];
    editAnswers.pop();
    setAnswers(editAnswers);

    // Revert any status to previous step
    setIsRejected(false);
    setStep(step - 1);

    // Hanling case of going back to landing
    if (step - 1 === 0) {
      document.body.classList.remove("overflow-y-hidden");
    }
  };

  const handleClose = () => {
    setAnswers([]);
    setIsRejected(false);
    setStep(0);
    document.body.classList.remove("overflow-y-hidden");
  };

  const renderStep = () => {
    if (isRejected) {
      return <Rejected />;
    }
    if (isEnded) {
      return <Ended />;
    }
    return <Question {...current} />;
  };

  return (
    <div className="fixed bg-brand-50 top-0 left-0 w-full h-screen z-50">
      <nav className="bg-brand-200">
        <div className="container mx-auto flex justify-between p-4">
          <button
            type="button"
            onClick={handlePrevious}
            className="transition-opacity hover:opacity-60"
          >
            <Icon
              filename="chevron"
              className="h-10 w-10 fill-brand-900"
              aria-label="Return to the previous step back"
            />
          </button>
          <span className="text-4xl uppercase">Manual</span>
          <button
            type="button"
            onClick={handleClose}
            className="transition-opacity hover:opacity-60"
          >
            <Icon
              filename="cross"
              className="h-10 w-10 fill-brand-900"
              aria-label="Close the quiz"
            />
          </button>
        </div>
      </nav>
      <div className="container mx-auto flex flex-col items-center py-8 px-4 md:py-16 md:px-8">
        {renderStep()}
      </div>
    </div>
  );
}
