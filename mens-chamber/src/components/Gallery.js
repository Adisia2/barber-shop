import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/menHairstyles")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-top">
      <div className="row mt-5">
        {images.map((image) => {
          return (
            <div
              key={image.id}
              className="card m-3"
              style={{ width: "18rem" }}
            >
              <NavLink to={`/appointment/${image.id}`}>
                <img
                  src={image.image}
                  className="card-img-top"
                  alt={image.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </NavLink>
              <div className="card-body">
                <h4 className="card-title">{image.name}</h4>
                <h4 className="card-title">{image.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
