import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/homepage';
import Chatpdf from './pages/chatpdf';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "teal";

  return (
    <>
    <Router>
        <Nav color={color} />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/chatpdf' component={Chatpdf} />
            </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
