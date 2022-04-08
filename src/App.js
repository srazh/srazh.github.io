
import React from 'react';
import './App.css';
//import Navbar from "./components/navbar/NavbarElements";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Work from './components/pages/Work';
import Play from './components/pages/Play';
import Interests from './components/pages/Interests';

export default function App() {
    return (
        <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Work' element={<Work/>} />
            <Route path='/Play' element={<Play/>} />
            <Route path='/Interests' element={<Interests/>} />
        </Routes>
        </Router>
    ); 
}