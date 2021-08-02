import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Search from './Search';

function App() {
  return (
    <div className="app">
      <Router>
      <Switch>

      <Route path="/search/:query" exact>
          <Search />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
