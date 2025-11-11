import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import card1 from '../../images/card1.png'
import card2 from'../../images/card2.png'
import card3 from'../../images/card3.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate()
  return (
    
    <div className='container' 
 >
      <Carousel/>
      <br/>
<div class="row row-cols-1 row-cols-md-3 g-4 container" style={{marginLeft:"50px"}}>
  <div class="col">
    <div class="card h-100">
      <img src={card1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <button class="text-body-secondary" onClick={()=> navigate("/products")}>Shop Now</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={card2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <button class="text-body-secondary" onClick={()=>navigate("/products")}>Shop Now</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={card3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <button class="text-body-secondary" onClick={()=>navigate("/products")}>Shop Now</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Home;

