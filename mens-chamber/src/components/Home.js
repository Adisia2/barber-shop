import React from 'react';
import image from '../images/bg3.jpeg'
import image2 from '../images/bg2.jpeg'
const Home = () => {
    return (
        <div className='p-5 mt-0' style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '1600px',
        }}>
            <div className="mask d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                    <h1 className="mb-3">WE'RE THE LAST BREED</h1>
                    <h4 className="mb-3">we leave you feeling like you can fire the Boss</h4>
                    <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
                </div>
                
            </div>
            <div className='row'>
                <div className="card" style={{width:"18rem"}}>
                    <img src={image2} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
