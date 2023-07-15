import React, { Component } from 'react';
import Header from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

class HomePage extends Component {
  render() {
    
    const color = "teal";

    return (
        <>
        <Header color={color} />
        <About color={color} />
        <Experience color={color} />
        <Projects color={color} />
        <Contact color={color} />
        </>
      );
  }
}

export default HomePage;