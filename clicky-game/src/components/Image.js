import React from 'react';

const Image = ({image}) => (
  
    <div style={{height: '250px', marginTop: '20px'}} class="col-sm-3">
      <img style={{width: '100%', height: '100%', objectFit: 'cover', border: '1px solid red'}} src={image.image} alt="IMAGE" />
    </div>
);

export default Image;