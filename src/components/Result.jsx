import { HOME } from "../data/pages";
import { useQuizStore, useQuizStoreActions } from "../store/quiz-store";

export const Result = () => {
  const correctAnswers = useQuizStore((state) => state.correctAnswers);
  const { setCurrPage, resetCorrectAnswers, reshuffle } = useQuizStoreActions();
  const restart = () => {
    resetCorrectAnswers();
    reshuffle();
    setCurrPage(HOME);
  };

  return (
    <>
      <h2>ROH Quiz</h2>
      <h3>Your result</h3>
      <p>Du hast {correctAnswers} Fragen richtig beantwortet.</p>
      <button onClick={restart}>Homepage</button>
    </>
  );
};
