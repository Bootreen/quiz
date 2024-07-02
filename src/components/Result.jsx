import { useLocation } from "wouter";
import { useQuizStore } from "../store/quiz-store";

export const Result = () => {
  const [, setLocation] = useLocation("./result");
  const { correctAnswers } = useQuizStore();
  const results = [
    "Time to debug! 🐞\nEvery great coder has been here – chin up!",
    "HTML Newbie! 🌱\nKeep learning!",
    "HTML Newbie! 🌱\nKeep learning!",
    "CSS Apprentice! 🎨\nPractice time!",
    "JS Juggler! 🤹\nKeep going!",
    "Code Rockstar! 🎸\nAlmost flawless!",
    "Frontend Wizard! 🧙\nYou nailed it!",
  ];
  const gifs = [
    "/zero.gif",
    "/dissapointment.gif",
    "/dissapointment.gif",
    "/not-bad.gif",
    "/not-bad.gif",
    "/nod.gif",
    "/cheers.gif",
    "/excited.gif",
  ];
  return (
    <>
      <h2>Quiz Result</h2>
      <p className='result'>You have {correctAnswers} correct answers.</p>
      {results[correctAnswers].split("\n").map((element, id) => (
        <p key={id} className='result'>
          {element}
        </p>
      ))}
      <img className='result-gif' src={gifs[correctAnswers]}></img>
      <button onClick={() => setLocation("/")}>Back to Homepage</button>
    </>
  );
};
