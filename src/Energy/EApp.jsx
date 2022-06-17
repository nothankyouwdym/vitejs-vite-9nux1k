import React, { Component } from "react"
import { Outlet } from "react-router-dom"
import ENavBar from "./ENavbar"


class App extends Component{
  render(){
    return(
      <div>
            <h1>Project: The Big Bang</h1>

            <ENavBar />
            <Outlet />
      </div>      
    );
  }
}

export default App