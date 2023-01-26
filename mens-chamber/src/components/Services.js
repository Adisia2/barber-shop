import React,{useEffect, useState} from "react";

const Services = () => {
const [services, setServices] = useState([]);
const [selectedService, setSelectedService] = useState(JSON.parse(localStorage.getItem('selectedService') || '[]'))


useEffect(() => {
    fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            console.log(data);
        })
}, []);

const chooseStyle = service => {
    if (!selectedService.find(s => s.id === service.id)) {
        setSelectedService([...selectedService, service]);
    }
}
const removeStyle = service => {    
    setSelectedService(selectedService.filter(s => s.id !== service.id));
}

return (
    
    <div className="container mt-5  bg-secondary">
    <div className="col-10 p-4 bg-secondary mx-auto">
        <div className="row">                                                                                                                                                                                                                                  
        {selectedService.map(service => {
            return (
                <div key={service.id} className="card m-3" style={{width:"18rem"}}>
                    <img src={service.image} className="card-img-top" alt={service.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">{service.description}</p>
                        <button onClick={() => removeStyle(service)} type="button" className="btn btn-primary">Remove</button>
                    </div>
                </div>
            )   
        }
        )}
    </div>
    </div>

    <div className="row p-4 container">
    {/* <div className=" bg-secondary "> */}
        {services.map(service => {
            return (
                <div  key={service.id} className="card m-3 text-center" style={{width:"18rem"}}>
                    <img src={service.image} className="card-img-top" alt={service.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">{service.price}</p>
                        <button onClick={() => chooseStyle(service)} type="button" className="btn btn-primary">Book</button>
                    </div>
                </div>
            )       
        }       

        )}
        </div>
    </div>
    // </div>
    
);
};

export default Services;