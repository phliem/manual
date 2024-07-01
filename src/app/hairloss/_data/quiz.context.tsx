"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { QuestionType } from "../_quiz/question.types";

type AnswerType = string | boolean;

type QuizContextType = {
  questions: QuestionType[];
  answers: AnswerType[];
  setAnswers: (answer: AnswerType[]) => void;
  step: number;
  setStep: (step: number) => void;
  isRejected: boolean;
  setIsRejected: (isRejected: boolean) => void;
};

const QuizContext = createContext<QuizContextType | null>(null);

type QuizProviderType = {
  children: ReactNode;
  value?: Partial<QuizContextType>;
};

const QuizProvider = ({ children, value }: QuizProviderType) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerType[]>([]);
  const [isRejected, setIsRejected] = useState(false);

  const defaultValue: QuizContextType = {
    questions: [],
    step,
    setStep,
    answers,
    setAnswers,
    isRejected,
    setIsRejected,
    ...value,
  };

  return (
    <QuizContext.Provider value={defaultValue}>{children}</QuizContext.Provider>
  );
};

const useQuizContext = (): QuizContextType => {
  const context = useContext(QuizContext);

  if (context === null) {
    throw new Error(
      "This component is a QuizContext consumer, it must be used and initialised within a QuizProvider"
    );
  }

  return context;
};

export { QuizContext, QuizProvider, useQuizContext };
