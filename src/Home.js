import React from 'react';
import './css/Home.css';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Home() {
  return (
    <main>
      <div className="main" id="main">
        <div className="row">
          <div className="col-lg-5"></div>
          <div className="col"><About/><Experience/><Projects/><Contact/></div>
          <div className="col-lg-3" >
            <Header/>
            <Menu/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
