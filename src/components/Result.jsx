import { useLocation } from "wouter";
import { useQuizStore } from "../store/quiz-store";

export const Result = () => {
  const [, setLocation] = useLocation("./result");
  const { correctAnswers } = useQuizStore();
  return (
    <>
      <h2>Frontend Quiz</h2>
      <h3>Your result</h3>
      <p>Du hast {correctAnswers} Fragen richtig beantwortet.</p>
      <button onClick={() => setLocation("/")}>Homepage</button>
    </>
  );
};
