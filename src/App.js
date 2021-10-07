import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./containers/HomeTemplate/HomeTemplate";
import Home from "./containers/HomeTemplate/NameFilm/Home";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path= "/" exact Component= {Home} />
      </Switch>
    </Router>
  );
}

export default App;
