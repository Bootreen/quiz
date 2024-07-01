import "./App.css";
import { HOME, QUIZ, ADV, RESULT } from "./data/pages";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
import { Adv } from "./components/Adv";
import { Result } from "./components/Result";
import { useQuizStore } from "./store/quiz-store";

const App = () => {
  const currPage = useQuizStore((state) => state.currPage);
  return (
    <>
      {currPage === HOME && <Home />}
      {currPage === QUIZ && <Quiz />}
      {currPage === ADV && <Adv />}
      {currPage === RESULT && <Result />}
    </>
  );
};

export default App;
