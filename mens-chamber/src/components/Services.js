import { useState, useEffect } from 'react';

function Services() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('http://localhost:5000/services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchServices();
  }, []);

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
                  Book Service
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
