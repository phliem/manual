"use client";

import ChoiceType from "./choiceType";
import type { QuestionType } from "./question.types";

export default function Question(questionData: QuestionType) {
  const { question, type, options } = questionData;

  const renderQuestionType = () => {
    switch (type) {
      case "ChoiceType":
        return <ChoiceType options={options} />;
      default:
        throw new Error("We are not supporting the ${type} exercise");
    }
  };

  return (
    <div className="text-center max-w-6xl animate-slide-in">
      <h2 className="text-3xl md:text-4xl font-bold">{question}</h2>
      {renderQuestionType()}
    </div>
  );
}
