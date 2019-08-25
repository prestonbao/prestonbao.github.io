import React from 'react';
import '../css/Home.css';
import Header from './Header';
import Menu from './Menu';

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
