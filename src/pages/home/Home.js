import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import card1 from '../../images/card1.png'
import card2 from'../../images/card2.png'
import card3 from'../../images/card3.png'
import { useNavigate } from 'react-router-dom'
import "./Home.Module.css"

const Home = () => {
const navigate = useNavigate()
  return (
    
    <div className='container' 
 >
      <Carousel/>
      <br/>
<div className="row row-cols-1 row-cols-md-3 g-4 container" style={{ marginLeft: "0px" }}>
  {[card1, card2, card3].map((card, index) => (
    <div className="col" key={index}>
      <div className="card h-100 shadow-sm border-0 product-card" style={{ borderRadius: "15px", overflow: "hidden", transition: "transform 0.3s, box-shadow 0.3s" }}>
        <img src={card} className="card-img-top" alt={`Product ${index + 1}`} style={{ objectFit: "cover", height: "250px" }} />
        <div className="card-body">
          <h5 className="card-title text-dark">Exclusive Product</h5>
          <p className="card-text text-muted">Designed to elevate your lifestyle instantly.</p>
        </div>
        <div className="card-footer bg-white border-0">
          <button
            className="btn w-100 shop-btn"
            onClick={() => navigate("/products")}
            style={{ borderRadius: "8px", backgroundColor:"wheat" }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

<style>
  {`
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
  `}
</style>


    </div>
  )
}

export default Home;

