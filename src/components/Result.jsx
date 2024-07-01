import { useLocation } from "wouter";
import { useQuizStore, useQuizStoreActions } from "../store/quiz-store";

export const Result = () => {
  const [, setLocation] = useLocation("./result");
  const correctAnswers = useQuizStore((state) => state.correctAnswers);
  const { resetCorrectAnswers, reshuffle } = useQuizStoreActions();
  const restart = () => {
    resetCorrectAnswers();
    reshuffle();
    setLocation("/");
  };

  return (
    <>
      <h2>Frontend Quiz</h2>
      <h3>Your result</h3>
      <p>Du hast {correctAnswers} Fragen richtig beantwortet.</p>
      <button onClick={restart}>Homepage</button>
    </>
  );
};
