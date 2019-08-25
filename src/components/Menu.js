import React from 'react';
import '../css/Menu.css';

class Menu extends React.Component {

  render() {
    return (
      <div className="container">
      <nav className="menu">
        <a href="/about" className="menu-item" id="about-nav">About</a>
        <a href="/about" className="menu-item" id="experience-nav">Experience</a>
        <a href="/about" className="menu-item" id="projects-nav">Projects</a>
        <a href="/about" className="menu-item" id="contact-nav">Contact</a>
      </nav>
      </div>
    )
  }
}
export default Menu;