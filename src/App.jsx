import React, { Component } from "react"
import Navbar from "./Navbar"
import {Outlet} from "react-router-dom"


class App extends Component{
  render(){
    return(
      <div>
        <h1>Project: Geneva</h1>
        <Navbar />
        <Outlet />
      </div>
    );
  }
}

export default App