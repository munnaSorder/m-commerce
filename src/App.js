import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
   <Router>
     <Route path="/">
     <NavBar />
     <Home />
     </Route>
   </Router>
  );
}

export default App;
