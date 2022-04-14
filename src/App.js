import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Work from './components/pages/Work';
import Play from './components/pages/Play';
import Interests from './components/pages/Interests';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
    return (
        <Router>
            <div>
            <Container/>
            <Navbar/>
        <Switch>
            <Route path='/' element={<Home/>} />
            <Route path='/Work' element={<Work/>} />
            <Route path='/Play' element={<Play/>} />
            <Route path='/Interests' element={<Interests/>} />
        </Switch>
        <Footer />
        </div>
        </Router>
    ); 
}