type QuestionaireType = {
  questions: QuestionType[];
};

type QuestionType = {
  question: string;
  type: "ChoiceType";
  options: OptionType[];
};

type OptionType = {
  display: string;
  value: string | boolean;
  isRejection: boolean;
};

export type { QuestionaireType, QuestionType, OptionType };
