import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Toaster} from "react-hot-toast"
import Home from "./pages/Home"
import Success from "./pages/Success"
import NotFound from "./pages/NotFound"
import About_us from "./components/About_us"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path='/About' element={About_us} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
