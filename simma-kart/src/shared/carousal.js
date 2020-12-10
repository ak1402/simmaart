import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require('react-responsive-carousel').Carousel;

export const Corousel = (props) => {
    
    
    return (        
        <div>
            <Carousel showArrows={true}>
                {props.imageCollection.map((item,index)=>{
                    return <div key={index}> 
                        <img src = {item}></img> 
                        <p className="legend">Legend {index}</p>
                    </div>
                })}
            </Carousel>            
        </div>
    )
    
}