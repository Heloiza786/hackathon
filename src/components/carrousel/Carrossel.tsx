import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img3 from "../../imagem/Group 24.png";
import './Carrossel.css';

function Carrossel() {
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide custom-carousel"
            data-bs-ride="carousel"
            data-bs-interval="2000" 
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={img3} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={img3} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={img3} alt="Third slide" />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carrossel;
