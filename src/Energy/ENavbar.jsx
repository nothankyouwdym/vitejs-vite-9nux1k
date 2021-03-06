import React, { Component } from "react"
import {Link} from "react-router-dom"


class Navbar extends Component{
  render(){
    return(
      <nav>
        <Link to="/Energy"><span>Home</span></Link>
        <Link to="Basics-Of-Energy"><span>Basics</span></Link>
        <Link to="How-Energy-Works"><span>What Is Energy</span></Link>
        <Link to="Where-We-Got-Energy"><span>Origination</span></Link>
        <Link to="/"><span>Nukes</span></Link>
      </nav>
    );
  }
}

export default Navbar