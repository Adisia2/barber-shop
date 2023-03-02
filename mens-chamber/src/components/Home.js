import React from 'react';
import image from '../images/bg3.jpeg';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="p-5 row"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
      }}
    >
      <div className="mask d-flex justify-content-center align-items-center h-100 col">
        <div className="text-white">
          <h1 className="mb-3">WE'RE THE LAST BREED</h1>
          <h4 className="mb-3">we leave you feeling like you can fire the Boss</h4>
          <div className="d-flex flex-wrap mb-3">
            <NavLink
              className="btn btn-outline-light btn-lg me-2"
              to="/Appointment"
              role="button"
            >
              Book Appointment
            </NavLink>
            <NavLink
              className="btn btn-outline-light btn-lg"
              to="/Services"
              role="button"
            >
              View Services
            </NavLink>
          </div>
          <div className="d-flex align-items-center">
            <div>
              <h4>Contact Us</h4>
              <p>
                Address: 123 Main St, Anytown USA<br />
                Phone: 555-1234<br />
                Email: info@barbershop.com
              </p>
            </div>
            <div className="ms-auto">
              <a href="https://www.facebook.com/barbershop" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook fs-4 me-3"></i>
              </a>
              <a href="https://www.instagram.com/barbershop" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram fs-4 me-3"></i>
              </a>
              <a href="https://twitter.com/barbershop" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
