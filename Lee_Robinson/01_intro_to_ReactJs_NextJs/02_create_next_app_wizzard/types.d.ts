type TypeQuiz = {
  quiz_id: number;
  title: string;
  question_text: string;
  description: string;
};

type TypeAnswer = {
  answer_id: number;
  quiz_id: number;
  answer_text: string;
  is_correct: boolean;
};
