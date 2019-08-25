import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

function returnMenu() {
  document.getElementById("menu").style.display = "flex";
  document.getElementById("header").style.display = "block";
  document.getElementById("experience").style.display = "none";
  document.querySelector('body').classList.remove('content');
}

class Experience extends React.Component {
  render() {
    return (
      <div id="experience" style={{display: 'none'}} className="container">
        <h1 className="mt-5">Experience</h1>
        <h4>CS Student @ UT Austin.</h4>
        <span onClick={returnMenu}><FontAwesomeIcon style={{cursor: 'pointer'}} icon={faArrowCircleLeft} size='3x'/></span>
      </div>
    )
  }
}
export default Experience;