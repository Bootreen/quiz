import { quizQuestions } from "../data/questions";

export const ProgressBar = ({ currQuestion }) => {
  return (
    <div>
      {currQuestion + 1} of {quizQuestions.length}
    </div>
  );
};
