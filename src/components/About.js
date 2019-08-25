import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import '../css/About.css';

function returnMenu() {
  document.getElementById("menu").style.display = "flex";
  document.getElementById("header").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById('main').classList.remove('content');
}

class About extends React.Component {
  render() {
    return (
      <div id="about" style={{display: 'none'}} className="container">
        <h1 className="mt-5">ABOUT</h1>
        <h4>CS Student @ UT Austin.</h4>
        <span onClick={returnMenu}><FontAwesomeIcon style={{cursor: 'pointer'}} icon={faArrowCircleLeft} size='3x'/></span>
      </div>
    )
  }
}
export default About;