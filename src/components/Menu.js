import React from 'react';
import '../css/Menu.css';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.clearMenu = this.clearMenu.bind(this);
    this.displayContent = this.displayContent.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter(id) {
    document.getElementById('main').classList.add(id + '-hover');
  }

  mouseLeave(id) {
    document.getElementById('main').classList.remove(id + '-hover');
  }

  clearMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("header").style.display = "none"
  }

  displayContent(id) {
    this.clearMenu();
    document.getElementById("main").classList.add("content");
    document.getElementById(id).style.display = "block";
  }

  render() {
    return (
      <div className="container">
      <nav className="menu" id="menu">
        <span onMouseLeave={() => this.mouseLeave('about')} onMouseEnter={() => this.mouseEnter('about')}
         onClick={() => this.displayContent("about")} className="menu-item" id="about-nav">About</span>
        <span onMouseLeave={() => this.mouseLeave('experience')} onMouseEnter={() => this.mouseEnter('experience')}
        onClick={() => this.displayContent("experience")} className="menu-item" id="experience-nav">Experience</span>
        <span onMouseLeave={() => this.mouseLeave('projects')} onMouseEnter={() => this.mouseEnter('projects')}
        onClick={() => this.displayContent("projects")} className="menu-item" id="projects-nav">Projects</span>
        <span onMouseLeave={() => this.mouseLeave('contact')} onMouseEnter={() => this.mouseEnter('contact')}
        onClick={() => this.displayContent("contact")} className="menu-item" id="contact-nav">Contact</span>
      </nav>
      </div>
    )
  }
}
export default Menu;