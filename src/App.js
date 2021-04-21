import React from 'react';
import './App.css';
import Products from './Products/Product'
import Login from './login/Login'
import { BrowserRouter,Route, Switch } from 'react-router-dom';

const App = () => {
return ( 
  <BrowserRouter >
    <div>
     <Switch>
     <Route exact path = "/" component = { Login } /> 
     <Route path = "/login" component = { Login } />
     <Route path = "/products" component = { Products } />
    </Switch>
    </div>
    </BrowserRouter>
 
  );
 
}

export default App;

