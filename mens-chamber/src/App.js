import React from 'react';
import { Routes , Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Services from './components/Services'; 
import Gallery from './components/Gallery';
import Appointments from './components/Appointments';
import './App.css';

function App() {
  return (
    
    <div>
      <NavBar />
      <Routes>
        
        <Route  path="/home" element={<Home/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/appointments" element={<Appointments/>} />
        <Route  path="/" element={<Home/>} />
      </Routes>
     </div> 
   
  );
}

export default App;
