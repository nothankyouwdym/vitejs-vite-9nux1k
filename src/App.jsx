import React, { Component } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Project: Geneva</h1>
        <Outlet />
      </div>
    );
  }
}

export default App;
