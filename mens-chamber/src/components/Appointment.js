import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';

const Appointments = () => {
    const { id } = useParams();
    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState(new Date());

 

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
        setDate(date);
    }

    function handleSubmit(event) {
        event.preventDefault();
       
        const formData = {
            name: name,
            phone: phone,
            email: email,
            // service: service,
            // date: date,
         
        };
        console.log(formData);
        // Send the form data
        setName("");
        setPhone("");
        setEmail("");
        // setService("");
        // setDate("");

        // Send the form data to your server or handle it
        // locally
        fetch("http://localhost:9292/appointments/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
      })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            }
            )
           
    }
    

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 p-4">
                    <div className="card p-4">
                        <div className="card-header">
                            <h4 className="card-title">Book Appointment</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleNameChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={handlePhoneChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleEmailChange} />
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="service">Service</label>
                                    <select className="form-control" id="service" name="service" value={service} onChange={handleServiceChange}>
                                        <option value="">Select a service</option>
                                        <option value="Haircut">Haircut</option>
                                        <option value="Hair coloring">Hair coloring</option>
                                        <option value="Traditional warm towel">Traditional warm towel</option>
                                        <option value="Beard Trimming">Beard Trimming</option>
                                        <option value="Facial Grooming">Facial Grooming</option>
                                        <option value="Hair Styling">Hair Styling</option>
                                    </select>
                                </div> */}
                                {/* <div className="form-group">
                                    <label htmlFor="date">Date</label>
                                    <input type="text" className="form-control" id="date" name="date" value={date} onChange={handleDateTimeChange} />
                                </div> */}
                                <button type="submit" className="btn btn-primary mt-3">Book Appointment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;