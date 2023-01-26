import React, { useState } from "react";

const Contacts = () => {
    const [submitedData, setSubmitedData] = useState([]);
    const [name, setName] = useState("");
    const [contact , setContact] = useState("");
    const [time, setTime] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleTime(event) {
        setTime(event.target.value);
    }

    function handleContact(event) {
        setContact(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            name: name,
            contact: contact,
            time: time
        };
        setSubmitedData([...submitedData, formData]);
        setContact("");
        setTime("");
        setName("");

        // Send the form data to your server or handle it in some other way
        //post data to server
        fetch('http://localhost:5000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
                            <label htmlFor="contact">Contact</label>
                            <input type="text" className="form-control" id="contact" value={contact} onChange={handleContact} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Time</label>
                            <input type="text" className="form-control" id="time" value={time} onChange={handleTime} />
                        </div>
                        <button type="submit" className="btn btn-primary P-4 mt-5">Submit</button>
                    </form>
                </div>
            </div>
            <div className="contact-info">
                <h3>Mens Chamber</h3>
                <p>123 Main St</p>
                <p>City, State Zip</p>
                <p>Phone: 555-555-5555</p>
                <p>Email: info@barbershop.com</p>
            </div>
        </div>
    );
};

export default Contacts;
