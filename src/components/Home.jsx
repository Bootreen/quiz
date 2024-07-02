import { useLocation } from "wouter";
import { useQuizStoreActions } from "../store/quiz-store";

export const Home = () => {
  const [, setLocation] = useLocation("/");
  const { reshuffle, resetCurrQuestionId, resetCorrectAnswers, setAdvTimer } =
    useQuizStoreActions();
  const startQuiz = () => {
    reshuffle();
    resetCurrQuestionId();
    resetCorrectAnswers();
    setAdvTimer(10);
    setLocation("./quiz");
  };
  return (
    <>
      <h2>Frontend Quiz</h2>
      <h3>Welcome!</h3>
      <p className='description'>
        Are you ready to test your coding skills? Dive into our engaging quiz,
        designed to challenge and entertain you with questions on HTML, CSS, and
        JavaScript.
      </p>
      <h3>Quiz rules:</h3>
      <ul>
        <li>7 Questions total</li>
        <li>Each has 4 answer options</li>
        <li>Only one option is correct</li>
        <li>No skipping allowed</li>
        <li>No time restrictions</li>
      </ul>
      <button onClick={startQuiz}>Start Quiz</button>
    </>
  );
};
