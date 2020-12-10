import React, { useEffect, useState } from 'react';
import { Corousel } from '../shared/carousal';
import Goldreich1 from '../images/Goldreich1.jpg';
import Goldreich2 from '../images/Goldreich2.jpg';
import Goldreich3 from '../images/Goldreich3.jpg';
import Goldreich4 from '../images/Goldreich4.jpg';
import Goldreich5 from '../images/Goldreich5.jpg';
import Goldreich6 from '../images/Goldreich6.jpg';

export const Home = (props) => {      
    return (      
        <div>  
            <Corousel imageCollection = {[Goldreich1,Goldreich2, Goldreich3,  Goldreich4, Goldreich5, Goldreich6]}></Corousel>
        </div>
    )
}