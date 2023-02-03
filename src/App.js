import "./App.css";
import LanguageSelection from "./pages/LanguageSelection/LanguageSelection";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <LanguageSelection />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
