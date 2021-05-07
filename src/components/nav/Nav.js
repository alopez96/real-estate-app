import React from 'react';

// import react router components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import custom screen
import Home from '../../pages/Home';
import CashOnCash from '../../pages/CashOnCash';


function Main() {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cash">Cash</Link>
            </li>
          </ul>
        </nav>


        <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/cash">
            <CashOnCash />
        </Route>
    </Switch>

    </Router>
  );
}

export default Main;