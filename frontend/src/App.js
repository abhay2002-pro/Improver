import './App.css';
import Home from './components/Home';
import Paraphrase from './components/paraphrase/Paraphrase';
import Grammer from './components/Grammer/Grammer';
import Summariser from './components/Summariser/Summariser';
import Page404 from './components/Page404/Page404';
import Nav from './components/Nav/Nav';
import {BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

function App() {

  return (
    <>
   
     <Router>
     <Switch>
          <Route exact path="/">
            <Nav/>  
            <Home />
          </Route> 

          <Route exact path="/paraphrase">
          <Nav/>  
            <Paraphrase />
          </Route>

          <Route exact path="/grammer">
          <Nav/>  
            <Grammer />
          </Route>

          <Route exact path="/Summariser">
          <Nav/>  
            <Summariser />
          </Route>

          <Route exact path="/about">
          <Nav/>  
            <Grammer />
          </Route>

          
          <Route exact path="*">
            <Page404 />
          </Route>
        </Switch>
     </Router>
    </>
  );
}

export default App;
