import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom"

// THis is the app page 

const App = () => (
  <section> 
  <Navigation> 
  <Route path="/" exact component={Home} />
  <Route path="About" component={About} /> 
  <Route path="Contact" component={Contact} /> 
  </Navigation> 
  </section> 
); 

export default App;
