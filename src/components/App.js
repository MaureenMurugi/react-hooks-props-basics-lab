import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);


function App(props) {
  props= user;
  return (
    <div>
      <NavBar />
      <Home color={props.color} name ={props.name} city ={props.city}/>
      <About bio ={props.bio} isPublished={true}/>
      <Links links={props.links} />
      
     
    </div>
  );
}



export default App;


