 import { useState, useEffect } from 'react';

function Services() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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

  function openAppointmentModal(service) {
    setSelectedService(service);
    setShowAppointmentModal(true);
  }

  function closeAppointmentModal() {
    setShowAppointmentModal(false);
    setSelectedService(null);
    setAppointmentDetails({
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceId: selectedService.id,
          serviceName: selectedService.name,
          date: appointmentDetails.date,
          time: appointmentDetails.time,
          name: appointmentDetails.name,
          email: appointmentDetails.email,
          phone: appointmentDetails.phone,
          message: appointmentDetails.message,
        }),
      });
      const data = await response.json();
      console.log(data);
      closeAppointmentModal();
    } catch (error) {
      console.error(error);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setAppointmentDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
                <button onClick={() => openAppointmentModal(service)} type="button" className="btn btn-primary">
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for booking appointment */}
      {selectedService && (
        <div className={`modal ${showAppointmentModal ? 'show' : ''}`} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book {selectedService.name}</h5>
                <button type="button" className="close" onClick={() => closeAppointmentModal()} aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit ={(e) => handleSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <input
                                type="date"
                                className="form-control"
                                id="date"
                                name="date"
                                value={appointmentDetails.date}
                                onChange={(e) => handleInputChange(e)}
                                required
                                />
                                </div>
                                <div className="form-group">
                                <label htmlFor="time">Time</label>
                                <input
                                type="time"
                                className="form-control"
                                id="time"
                                name="time"
                                value={appointmentDetails.time}
                                onChange={(e) => handleInputChange(e)}
                                required
                                />
                                </div>
                                <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={appointmentDetails.name}
                                onChange={(e) => handleInputChange(e)}
                                required
                                />
                                </div>
                                <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={appointmentDetails.email}
                                onChange={(e) => handleInputChange(e)}
                                required
                                />
                                </div>
                                <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={appointmentDetails.phone}
                                onChange={(e) => handleInputChange(e)}
                                required
                                />
                                </div>
                                <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                value={appointmentDetails.message}
                                onChange={(e) => handleInputChange(e)}
                                required
                                ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                Book Appointment
                                </button>
                                </form>
                                </div>
                                </div>
                                </div>
                                </div>
                                )}
                                </div>
                                );
                                }

export default Services;
