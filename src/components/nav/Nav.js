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
import RentalAnalyzer from '../../pages/RentalAnalyzer';


function Main() {
  return (
    <Router>
        <nav>
          <ul className='no-bullets row'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cash">Cash</Link>
            </li>
            <li>
              <Link to="/rental">Rental</Link>
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
        <Route path="/rental">
            <RentalAnalyzer />
        </Route>
    </Switch>

    </Router>
  );
}

export default Main;