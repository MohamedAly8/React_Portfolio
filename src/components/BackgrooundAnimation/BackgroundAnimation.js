import React from 'react';
import { Memoji } from '../../constants/constants';


const BackgroundAnimation = () => (
  <div>
    
    {Memoji.map(({id, image}) => (
      <img key={id} src={image} 
      style={{
   
      width: '80%',
      marginLeft: '25%',
      objectFit: 'cover', zIndex: '-1'}}>

    </img>
    ))}
  </div>
);

export default BackgroundAnimation;