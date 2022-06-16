import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Basics from './Basics'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="Basics" element={<Basics />}></Route>
            </Route>
        </Routes>
  </BrowserRouter>
)
