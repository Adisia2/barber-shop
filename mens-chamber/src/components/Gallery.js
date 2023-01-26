import React from "react";
import { useEffect, useState } from "react";    

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/menHairstyles')
            .then(res => res.json())
            .then(data => {
                setImages(data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className="container mt-5">
        <div className="row  mt-5">
            {images.map(image => {
                return (
                    <div key={image.id} className="card  m-3" style={{width:"18rem"}}>
                        <img src={image.image} className="card-img-top" alt={image.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{image.name}</h5>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    );
};  

export default Gallery;
