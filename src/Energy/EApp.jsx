import React, { Component } from "react"
import { Outlet } from "react-router-dom"
import ENavBar from "./ENavbar"


class App extends Component{
  render(){
    return(
      <div>
            <ENavBar />
            <h1>Project: The Big Bang</h1>
            <Outlet />
      </div>      
    );
  }
}

export default App