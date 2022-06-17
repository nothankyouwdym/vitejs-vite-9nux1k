import React, { Component } from "react"
import {Link} from "react-router-dom"


class Navbar extends Component{
  render(){
    return(
      <nav>
        <Link to="/Basics"><span>Basics</span></Link>
        <Link to="/How-To-Make-A-Nuke"><span>How-To</span></Link>
        <Link to="/About-Us"><span>About Us</span></Link>
        <Link to="/Nuke-History"><span>Nuke History</span></Link>
        <Link to="/Energy"><span>Energy</span></Link>
      </nav>
    );
  }
}

export default Navbar