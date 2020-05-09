import React from 'react';

const Card = (props) => (

    <div className="gallery col-md">
      <img src={props.image} onClick={() => props.imageClick(props.id)}/>
    </div>

);

export default Card;