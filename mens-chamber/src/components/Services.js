import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('https://kinyozi.up.railway.app/services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchServices();
  }, []);

  async function handleDelete(id) {
    try {
      await fetch(`http://localhost:9292/services/${id}`, { method: 'DELETE' });
      setServices(services.filter((service) => service.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mt-5 bg-secondary">
      <div className="container">
        <div className="row row-cols-2">
          {services.map((service) => (
            <div key={service.id} className="card m-3 text-center col" style={{ width: '18rem' }}>
              <img
                src={service.image}
                className="card-img-top"
                alt={service.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.price}</p>
                <button type="button" className="btn btn-primary">
                  <NavLink className="btn btn-outline-light" to="/Appointment" role="button">
                    Book service
                  </NavLink>
                </button>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(service.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
