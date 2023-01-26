import React,{useEffect, useState} from "react";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }
    , [])

    return (
        <div className="container mt-5">
        <div className="row p-4">
            {services.map(service => {
                return (
                    <div key={service.id} className="card m-3 text-center" style={{width:"18rem"}}>
                        <img src={service.image} className="card-img-top" alt={service.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{service.name}</h5>
                            <p className="card-text">{service.description}</p>
                            
                            <button type="button" className="btn btn-primary">Book</button>
                        </div>
                    </div>
                )
            }
            )}
        </div>
        </div>
    );
};

export default Services;