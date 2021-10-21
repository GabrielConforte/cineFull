import React from 'react';
import './App.css';
import Navegation from './components/Navegation';
import Details from './components/Details';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ItemConteiner from './components/ItemConteiner';



function App() {

  
  return (

    <Router>
    <div className="App"> 
       
      <div className="container rounded">
      <Navegation/>
      <Switch>
      <Route path="/item/:id">
              <Details/>
        </Route>
        <Route exact path="/">
              <ItemConteiner/>
        </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
