import React, { useState } from 'react';


const Contacts = () => {
    const [submitedData, setSubmitedData] = useState([]);
    const [name, setName] = useState("");
    const [contact , setContact] = useState("");
    const [time, setTime] = useState("");
    const [feedback, setFeedback] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleTime(event) {
        setTime(event.target.value);
    }

    function handleContact(event) {
        setContact(event.target.value);
    }

    function handleFeedback(event) {
        setFeedback(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            name: name,
            contact: contact,
            time: time,
            feedback: feedback
        };
        setSubmitedData([...submitedData, formData]);
        setContact("");
        setTime("");
        setName("");
        setFeedback("");

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
                        <div className="form-group">
                            <label htmlFor="feedback">Feedback</label>
                            <textarea type="text" className="form-control" id="feedback" value={feedback} onChange={handleFeedback} />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h4>Appointment List</h4>
                    <ul className="list-group">
                        {submitedData.map((data, index) => (
                            <li className="list-group-item" key={index}>
                                <h5>{data.name}</h5>
                                <p>{data.contact}</p>
                                <p>{data.time}</p>
                                <p>{data.feedback}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
