import React from 'react';
import image from '../images/bg3.jpeg'
import { NavLink } from 'react-router-dom';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='p-5 mt-0' style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '1600px',
        }}>
            <div className="mask d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                    <h1 className="mb-3">WE'RE THE LAST BREED</h1>
                    <h4 className="mb-3">we leave you feeling like you can fire the Boss</h4>
                    <NavLink className="btn btn-outline-light btn-lg" to="/Contact" role="button">Call to action</NavLink>
                </div>
                
            </div>
            
        </div>
    );
}

export default Home;
