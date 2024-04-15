import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Carrossel({ imagens }) {
  console.log("qui estao as Imangens",imagens)
  console.log("a Imagems zero é",imagens[0])
  return (
    <Carousel  className='carrosel'autoPlay  dynamicHeight={false} >
        <div>
            <img src={imagens[0]} alt='CFtV'></img>
          
        </div>
        <div>
            <img src={imagens[1]} alt='CFtV'></img>
            
        </div>
        <div>
            <img src={imagens[2]} alt='CFtV'></img>
           
        </div>
        <div>
            <img src={imagens[3]} alt='CFtV'></img>
           

        </div>
        <div>
            <img src={imagens[4]} alt='CFtV'></img>
            
        </div>
        <div>
            <img src={imagens[5]} alt='CFtV'></img>
            
        </div>
    </Carousel>
  );
}

export default Carrossel;