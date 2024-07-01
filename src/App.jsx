import "./css/styles.css";
import { Route } from "wouter";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
import { Adv } from "./components/Adv";
import { Result } from "./components/Result";

const App = () => (
  <>
    <Route path='/'>
      <Home />
    </Route>
    <Route path='/quiz'>
      <Quiz />
    </Route>
    <Route path='/advertizing'>
      <Adv />
    </Route>
    <Route path='/result'>
      <Result />
    </Route>
  </>
);

export default App;
