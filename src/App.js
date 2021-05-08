/*
* title: m-commerce
* description: e-commerce website
* author: Munna Islam
* date: 09/05/2021
*/

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Checkout from './Components/Checkout/Checkout';
import Profile from './Components/Profile/Profile';

export const UserContext = createContext();
export const CartContext = createContext();

function App() {

  const [user, setUser] = useState({});
  const [globalCart, setGlobalCart] = useState([])
  console.log(globalCart);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if(userInfo){
      setUser(userInfo);
    }
    
  },[])
  
  return (
    <UserContext.Provider value={[ user, setUser ]}>
    <CartContext.Provider value={[ globalCart, setGlobalCart]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          {/* private route */}
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          {/* private route */}
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    </CartContext.Provider>
   </UserContext.Provider>
  );
}

export default App;
