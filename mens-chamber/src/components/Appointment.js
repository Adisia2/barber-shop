import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const Appointments = () => {
    const [submitedData, setSubmitedData] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [dateTime, setDateTime] = useState(new Date());

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
            dateTime: dateTime
        };
        setSubmitedData([...submitedData, formData]);
        setName("");
        setPhone("");
        setEmail("");
        setService("");
        setDateTime(new Date());

        // Send the form data to your server or handle it in some other way
        //post data to server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Appointment Submitted!',
                    text: 'Your appointment has been submitted successfully.',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                  })
            }
            )
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div className="container mt-5 pt-5 text-center align-content-center">
            <div className="row">
                <div className="col-md-6 align-content-center">
                    <form onSubmit={handleSubmit}>
                        <h4>Appointment</h4>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" className="form-control" id="phone" value={phone} onChange={handlePhoneChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Service</label>
                            <input type="text" className="form-control" id="service" value={service} onChange={handleServiceChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dateTime">Date Time</label>
                            <br />
                            <DatePicker
                                selected={dateTime}
                                onChange={handleDateTimeChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={30}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
               
            </div>
        </div>
    );
};

export default Appointments;


