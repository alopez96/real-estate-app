import React from 'react';

// import react router components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import custom screen
import CashOnCash from './CashOnCash';

//import custom components
import BigSquareButton from '../components/buttons/BigSquareButton';


function Main() {
  return (
    <div>
        <Router>

          <div>
          <Link to='/test'>
            <BigSquareButton
            cta={'Cash on cash'}
            />
          </Link>
          </div>


          <Switch>
          <Route path="/test">
            <CashOnCash />
          </Route>
        </Switch>

        </Router>
    </div>
  );
}

export default Main;