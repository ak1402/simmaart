import React, { useEffect, useState } from 'react';
import { Corousel } from '../shared/carousal';
import Goldreich1 from '../images/Goldreich1.webp';
import Goldreich2 from '../images/Goldreich2.webp';
import Goldreich3 from '../images/Goldreich3.webp';
import Goldreich4 from '../images/Goldreich4.webp';
import Goldreich5 from '../images/Goldreich5.webp';
import Goldreich6 from '../images/Goldreich6.webp';

const images = require.context("../images", false, /.*\.webp$/);
export const Home = (props) => {      
    return (      
        <div>  
            <Corousel imageCollection = {[Goldreich1,Goldreich2, Goldreich3,  Goldreich4, Goldreich5, Goldreich6]}></Corousel>
        </div>
    )
}