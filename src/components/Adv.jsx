import { useLocation } from "wouter";
import { useEffect } from "react";
import { useQuizStore, useQuizStoreActions } from "../store/quiz-store";
import { ProgressBar } from "./ProgressBar";

export const Adv = () => {
  const { advTimer } = useQuizStore();
  const { setAdvTimer } = useQuizStoreActions();
  useEffect(() => {
    advTimer > 0 && setTimeout(() => setAdvTimer(advTimer - 1), 1000);
  }, [advTimer]);
  const [, setLocation] = useLocation("./advertizing");
  return (
    <>
      <a
        href='https://talents.taktsoft.com/bewerbung?bootcamp=0'
        target='_blank'
      >
        <div className='adv-img-container'>
          <img className='adv-img' src='/tct-logo.png' />
        </div>
      </a>
      <p className='description'>
        Do you want to learn how to create this and dozens of other cool web
        applications? Ready to start a new career and secure your financial
        future? Join the Taktsoft Campus Talents program and sign up for our
        Bootcamp as a Frontend or Fullstack developer.{" "}
      </p>
      <ProgressBar
        current={advTimer}
        total={10}
        indicatorTemplate='Advertising: |{current}| seconds left'
        palette='sky'
      />
      <form
        className='buttons-container'
        target='_blank'
        action='https://talents.taktsoft.com/bewerbung?bootcamp=0'
      >
        <button type='submit'>Register</button>
        <button
          type='button'
          onClick={() => setLocation("./result")}
          disabled={advTimer > 0}
        >
          Skip Ad
        </button>
      </form>
    </>
  );
};
