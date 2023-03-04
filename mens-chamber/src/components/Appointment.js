import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const Appointments = () => {
    const { id } = useParams();
    const [image, setImage] = useState({});
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        fetch(`http://localhost:5000/menHairstyles/${id}`)
            .then(res => res.json())
            .then(data => setImage(data));
    }, [id])

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handlePhoneChange(event) {
        setPhone(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleServiceChange(event) {
        setService(event.target.value);
    }

    function handleDateTimeChange(date) {
        setDateTime(date);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (name.trim() === '' || phone.trim() === '' || email.trim() === '' || service.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields!',
            });
            return;
        }
        const formData = {
            name: name,
            phone: phone,
            email: email,
            service: service,
            dateTime: dateTime,
            image: image
        };
        setName("");
        setPhone("");
        setEmail("");
        setService("");
        setDateTime(new Date());

        // Send the form data to your server or handle it
        // locally
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Appointment booked successfully!',
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later!',
                });
                console.error('There was an error!', error);
            });
    }
    

    return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Book Appointment</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service</label>
                      <select
                        className="form-control"
                        id="service"
                        name="service"
                        value={service}
                        onChange={handleServiceChange}
                      >
                        <option value="">Select a service</option>
                        <option value="Haircut">Haircut</option>
                        <option value="Shave">Shave</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="dateTime">Date and Time</label>
                      <br />
                      <DatePicker
                        selected={dateTime}
                        onChange={handleDateTimeChange}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Book Appointment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Appointments;