import React from 'react';
import '../css/Menu.css';

function clearMenu() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("header").style.display = "none"
}

function displayContent() {
  document.body.classList.add("content");
}

function displayAbout(){
  clearMenu();
  displayContent();
  document.getElementById("about").style.display = "block";

}

function displayExperience(){
  clearMenu();
  displayContent();
  document.getElementById("experience").style.display = "block";
}

class Menu extends React.Component {

  render() {
    return (
      <div className="container">
      <nav className="menu" id="menu">
        <a href="#" onClick={displayAbout} className="menu-item" id="about-nav">About</a>
        <a href="#" onClick={displayExperience} className="menu-item" id="experience-nav">Experience</a>
        <a href="#" className="menu-item" id="projects-nav">Projects</a>
        <a href="#" className="menu-item" id="contact-nav">Contact</a>
      </nav>
      </div>
    )
  }
}
export default Menu;