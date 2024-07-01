import "./PageQuiz.css";
import { useState } from "react";
import { clsx } from "clsx";
import { quizQuestions } from "../data/questions";
import { ProgressBar } from "./ProgressBar";

export const PageQuiz = ({
  navHandler,
  answersHandler,
  correctAnswers,
  shuffled,
}) => {
  const [currQuestionId, setCurrQuestionId] = useState(0);
  const { question, options } = quizQuestions[currQuestionId];
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedWrongOptionId, setSelectedWrongOptionId] = useState("none");

  const isCorrect = (shuffledId) => (shuffledId === 0 ? true : false);
  const isLastQuestion = currQuestionId === quizQuestions.length - 1;

  const switchQuestion = () => {
    setIsAnswered(false);
    setSelectedWrongOptionId("none");
    if (isLastQuestion) {
      navHandler();
    } else {
      setCurrQuestionId(currQuestionId + 1);
    }
  };

  const processAnswer = (shuffledId, realId) => {
    setIsAnswered(true);
    if (isCorrect(shuffledId)) {
      answersHandler(correctAnswers + 1);
    } else {
      setSelectedWrongOptionId(realId);
    }
  };

  return (
    <>
      <ProgressBar currQuestion={currQuestionId} />
      <h3>{question}</h3>
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
