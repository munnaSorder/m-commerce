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
export const UserContext = createContext();

function App() {

  const [user, setUser] = useState({});
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if(userInfo){
      setUser(userInfo);
    }
    
  },[])
  console.log(user);
  return (
    <UserContext.Provider value={[user, setUser]}>
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
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
        </Switch>
      </Router>
   </UserContext.Provider>
  );
}

export default App;
