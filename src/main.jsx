import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Basics from './Basics'
import HowTo from './HowTo'
import AboutUs from './AboutUs'
import History from './History'
import EApp from "./Energy/EApp"
import EBasics from "./Energy/EBasics"
import HowItWork from "./Energy/HowItWork"
import Original from "./Energy/Original"
import Home from './Home'
import EHome from "./Energy/EHome"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Home />}></Route>
                <Route path="Basics" element={<Basics />}></Route>
                <Route path="How-To-Make-A-Nuke" element={<HowTo />}></Route>
                <Route path="About-Us" element={<AboutUs />}></Route>
                <Route path="Nuke-History" element={<History />}></Route>
            </Route>

            <Route path="Energy" element={<EApp />}>
              <Route path="/Energy" element={<EHome />}></Route>
              <Route path="Basics-Of-Energy" element={<EBasics />}></Route>
              <Route path="How-Energy-Works" element={<HowItWork />}></Route>
              <Route path="Where-We-Got-Energy" element={<Original />}></Route>
            </Route>
        </Routes>
  </BrowserRouter>
)
