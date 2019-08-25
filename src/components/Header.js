import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="container" id="header">
        <h1 className="mt-5">PRESTON BAO</h1>
        <h4>CS Student @ UT Austin.</h4>
      </div>
    )
  }
}
export default Header;