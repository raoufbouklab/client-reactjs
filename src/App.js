import React from 'react';
import './App.css';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from "./components/About";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Header/>
              <Navigation/>
              <Title/>
              <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/users" component={Users}/>
                  <Route path="/about" component={About}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
