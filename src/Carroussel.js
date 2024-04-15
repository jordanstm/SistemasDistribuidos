import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carrosel.css';

function Carrossel({ imagens }) {

  return (
    <Carousel  className='carrosel' autoPlay  dynamicHeight={true} showThumbs={false}>
        <div>
            <img className='img' src={imagens[0]} alt='CFtV'></img>
          
        </div>
        <div>
            <img className='img' src={imagens[1]} alt='CFtV'></img>
            
        </div>
        <div>
            <img className='img' src={imagens[2]} alt='CFtV'></img>
           
        </div>
        <div>
            <img className='img' src={imagens[3]} alt='CFtV'></img>
           

        </div>
        <div>
            <img className='img' src={imagens[4]} alt='CFtV'></img>
            
        </div>
        <div>
            <img className='img' src={imagens[5]} alt='CFtV'></img>
            
        </div>
    </Carousel>
  );
}

export default Carrossel;