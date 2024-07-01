import { RESULT } from "../data/pages";
import { useQuizStoreActions } from "../store/quiz-store";

export const Adv = () => {
  const { setCurrPage } = useQuizStoreActions();
  return (
    <>
      <a
        href='https://talents.taktsoft.com/bewerbung?bootcamp=0'
        target='_blank'
      >
        <img src='/TaktsoftLogo.jpg' />
      </a>
      <h3>Advertising</h3>
      <button onClick={() => setCurrPage(RESULT)}>Skip Ad</button>
    </>
  );
};
