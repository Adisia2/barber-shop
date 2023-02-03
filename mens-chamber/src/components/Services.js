import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(
    JSON.parse(localStorage.getItem('selectedService') || '[]')
  );

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        console.log(data);
      });
  }, []);

  const chooseService = service => {
    if (!selectedService.find(s => s.id === service.id)) {
      setSelectedService([...selectedService, service]);
    }
  };

  const removeService = service => {
    setSelectedService(selectedService.filter(s => s.id !== service.id));
  };

  const addService = () => {
    const newService = { id: services.length + 1, name: 'New Service', price: '$100' };
    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newService),
    })
      .then(res => res.json())
      .then(data => {
        setServices([...services, newService]);
      });
  };

  const deleteService = id => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="container mt-5 bg-secondary">
      <div className="col-10 p-4 bg-secondary mx-auto">
        <div className="row">
          {selectedService.map(service => (
            <div key={service.id} className="card m-3" style={{ width: '18rem' }}>
              <img
                src={service.image}
                className="card-img-top"
                alt={service.name}
              />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <button onClick={() => removeService(service)} type="button" className="btn btn-primary">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" container">
        <div className="row row-cols-2">
        {services.map(service => (
          <div key={service.id} className="card m-3 text-center col" style={{ width: '18rem' }}>
            <img
              src={service.image}
              className="card-img-top"
              alt={service.name}
            />
            <div className="card-body">
              <h5 className="card-title">{service.name}</h5>
              <p className="card-text">{service.price}</p>
              <button onClick={() => chooseService(service)} type="button" className="btn btn-primary">
                ChooseService </button>
                <button onClick={() => deleteService(service.id)} type="button" className="btn btn-danger">
                Delete </button>
            </div>
            </div>
        ))}
        </div>
        </div>
        
    </div>
    );
};

export default Services;
