import React from "react";
import background from "../images/bg.jpeg";

const AboutUs = () => {
    return (
        <div
        style={{
        padding: "100px",
        background: "rgb(180, 180, 180)",
        backgroundsize: "cover",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        
        }}          
        >
        <div className="container text-white fs-3 text ">
        <h1 className="text-center ">About Us</h1>
        <p className="fs-3 text">Welcome to our barbershop! We are a locally owned and operated business that has been serving the community for over 10 years. Our team of experienced barbers specialize in a variety of cuts and styles for men, women, and children. We pride ourselves on providing excellent customer service and a comfortable, relaxed atmosphere for our clients.</p>
      <p>We also offer a wide range of grooming products to help you maintain your look at home. From hair care to skin care, we have everything you need to look and feel your best.</p>
        </div>
        </div>
    );
    }

export default AboutUs;