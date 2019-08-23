import React from 'react';
import './Home.css';
import Header from './components/Header';
import Menu from './components/Menu';

function Home() {
  return (
    <main>
      <div className="row">
        <div className="col"></div>
        <div className="col-lg-3">
          <Header/>
          <Menu/>
        </div>
      </div>
    </main>
  );
}

export default Home;
