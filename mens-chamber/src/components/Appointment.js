import React, { useState,  } from 'react';
import Swal from 'sweetalert2';

const Appointments = () => {
    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handlePhoneChange(event) {
        setPhone(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
      
        const formData = {
          name: name,
          phone: phone,
          email: email,
        };
      
        console.log(formData);
      
        fetch('https://kinyozi.up.railway.app/appointments/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setName('');
            setPhone('');
            setEmail('');
      
            // Show success message
            Swal.fire({
              title: 'Success!',
              text: 'Your appointment has been booked.',
              icon: 'success',
              confirmButtonText: 'OK',
            });
          });
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