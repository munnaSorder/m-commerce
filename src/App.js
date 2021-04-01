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

function App() {
  return (
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
     </Switch>
   </Router>
  );
}

export default App;
