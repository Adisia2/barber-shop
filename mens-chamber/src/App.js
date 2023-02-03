import React from 'react';
import { Routes , Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Services from './components/Services'; 
import Gallery from './components/Gallery';
import "./css/style.css";



import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    
    <div>
      <NavBar />
      <Routes>
        
        <Route  path="/home" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
       
       
        <Route  path="/" element={<Home/>} />
      </Routes>
      <Footer />
     </div> 
   
  );
}

export default App;
