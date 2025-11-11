import React from 'react';
import banner1 from "../../images/banner1 (2).png"
import banner2 from "../../images/banner2.png";
import banner3 from "../../images/banner3.png";
import banner4 from "../../images/banner4.png";
import "./Carousel.Module.css";

const Carousel = () => {
  return (
    <div className="carousel-container mt-4">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade container overflow-hidden"
        data-bs-ride="carousel"
        data-bs-interval="3000" 
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={banner1}
              className="d-block w-100 object-fit-cover"
              alt="Banner 1"
              style={{ height: "500px", objectPosition: "center" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={banner2}
              className="d-block w-100 object-fit-cover"
              alt="Banner 2"
              style={{ height: "500px", objectPosition: "center" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={banner3}
              className="d-block w-100 object-fit-cover"
              alt="Banner 3"
              style={{ height: "500px", objectPosition: "center" }}
            />
          </div>
           <div className="carousel-item">
            <img
              src={banner4}
              className="d-block w-100 object-fit-cover"
              alt="Banner 4"
              style={{ height: "500px", objectPosition: "center" }}
            />
          </div>
           <div className="carousel-item">
            <img
              src={banner3}
              className="d-block w-100 object-fit-cover"
              alt="Banner 3"
              style={{ height: "500px", objectPosition: "center" }}
            />
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
         <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> 
      </div>
    </div>
  );
};

export default Carousel;
