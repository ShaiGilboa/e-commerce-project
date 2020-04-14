import React, {
  useState,
  useEffect,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import GlobalStyles from '../GlobalStyles';
import Navbar from '../Navbar';
import Feed from '../Feed';
import Checkout from '../Checkout';
import { BigItem } from '../Items';
import Cart from '../Cart';
import HomePage from '../HomePage';
import { useAuth0 } from "../SignIn/react-auth0-spa";
import Profile from "../SignIn/Profile";
import history from "../../utils/history";
import PrivateRoute from '../SignIn/PrivateRoute';


function App() {
 
  // const { loading } = useAuth0();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Router history={history}>
      <GlobalStyles />
      <Navbar />
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path="/profile" component={Profile} />
      {/* <Cart /> */}
      <Switch>
        <Route path='/items' exact>
          <Feed />
        </Route>
        <Route path='/items/:itemId' >
          {/*render the page component*/}
          <BigItem />
        </Route>
        <Route path='/companies' exact>
        </Route>
        <Route path='/checkout' exact>
          <Checkout />
        </Route>
      </Switch>
      {/*Footer*/}
    </Router>
  );
}

export default App;
