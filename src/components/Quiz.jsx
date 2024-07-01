import { clsx } from "clsx";
import { useLocation } from "wouter";
import { useQuizStore, useQuizStoreActions } from "../store/quiz-store";
import { quizQuestions } from "../data/questions";
import { ProgressBar } from "./ProgressBar";

export const Quiz = () => {
  const [, setLocation] = useLocation("./quiz");
  const {
    incCurrQuestionId,
    incCorrectAnswers,
    toggleIsAnswered,
    setSelectedWrongOptionId,
  } = useQuizStoreActions();
  const { shuffled, currQuestionId, isAnswered, selectedWrongOptionId } =
    useQuizStore();
  const { question, options } = quizQuestions[currQuestionId];

  const isCorrect = (shuffledId) => (shuffledId === 0 ? true : false);
  const isLastQuestion = currQuestionId === quizQuestions.length - 1;

  const switchQuestion = () => {
    toggleIsAnswered();
    setSelectedWrongOptionId("none");
    if (isLastQuestion) setLocation("./advertizing");
    else incCurrQuestionId();
  };

  const processAnswer = (shuffledId, realId) => {
    toggleIsAnswered();
    if (isCorrect(shuffledId)) incCorrectAnswers();
    else setSelectedWrongOptionId(realId);
  };

  return (
    <>
      <ProgressBar
        current={currQuestionId + 1}
        total={quizQuestions.length}
        indicatorTemplate='{current}| of |{total}'
        palette='gold'
      />
      <div className='question-container'>
        <h3>{question}</h3>
      </div>
      <div className='options-container'>
        {shuffled[currQuestionId].map((shuffledId, realId) => (
          <button
            key={realId}
            className={clsx(
              isAnswered && isCorrect(shuffledId) && "correct",
              isAnswered && realId === selectedWrongOptionId && "wrong"
            )}
            onClick={() => processAnswer(shuffledId, realId)}
            disabled={isAnswered}
          >
            {options[shuffledId]}
          </button>
        ))}
      </div>
      <button onClick={switchQuestion} disabled={!isAnswered}>
        {isLastQuestion ? "To Result" : "Next Question"}
      </button>
    </>
  );
};
