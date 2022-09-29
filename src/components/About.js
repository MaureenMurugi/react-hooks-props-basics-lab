import React from "react";
import Links from "../components/Links"

function About(props) {
  if (!props.isPublished) {
    return null
  }else {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    
    </div>
  );
  }
}

export default About;
