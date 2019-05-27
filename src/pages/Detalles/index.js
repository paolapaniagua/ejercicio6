import React from 'react';
import Nav from '../../components/Nav';
import DetallePost from '../../containers/DetallePost';

const Detalle = (props) => {
  return (
    <div className="detail-page">
      <Nav />
      <div className="container">
        <DetallePost {...props}/>
      </div>
    </div>
  );
}

export default Detalle;