import React, { Component } from "react"
import {Link} from "react-router-dom"


class Navbar extends Component{
  render(){
    return(
      <nav>
        <Link to="Basics-Of-Energy"><span>Basics</span></Link>
        <Link to="How-Energy-Works"><span>What Is Energy</span></Link>
        <Link to="Where-We-Got-Energy"><span>Origination</span></Link>
        <Link to="/"><san>Nukes</span></Link>
      </nav>
    );
  }
}

export default Navbar