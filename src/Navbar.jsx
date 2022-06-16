import React, { Component } from "react"
import {Link} from "react-router-dom"


class Navbar extends Component{
  render(){
    return(
      <nav>
        <Link to="/Basics">Basics</Link>
        <Link to="/HowTo">Basics</Link>
      </nav>
    );
  }
}

export default Navbar