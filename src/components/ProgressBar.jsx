import { quizQuestions } from "../data/questions";
import { clsx } from "clsx";

export const ProgressBar = ({ currQuestion }) => {
  return (
    <>
      <div className='progress-indicatior'>
        {currQuestion + 1} of {quizQuestions.length}
      </div>
      <div className='progress-bar'>
        {new Array(quizQuestions.length).fill(0).map((_, id) => (
          <div
            key={id}
            className={clsx(
              "progress-bit",
              id <= currQuestion && "bit-active",
              id === currQuestion && "bit-last"
            )}
          ></div>
        ))}
      </div>
    </>
  );
};
