import React from 'react';

const Card = (props) => (
  
    <div style={{height: '250px', marginTop: '20px'}} className="col-sm-3">
      <img style={{width: '100%', height: '100%', objectFit: 'cover', border: '1px solid red'}} src={props.image} onClick={() => props.imageClick(props.id)} />
    </div>
);

export default Card;