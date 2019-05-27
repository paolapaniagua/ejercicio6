import React from 'react';
import { Link } from 'react-router-dom';

const CardDetail = ({ title, body}) => ( //Card que va a renderizar los datos que traemos unicamente.
 
 <div class="card text-white bg-success mb-3">
  <div class="card-body">
    <h5 class="card-title">{title} </h5>
    <p class="card-text"> {body} </p>
  </div>

              <div className="card-action">
                <Link to='/'>
                  Volver al listado
                </Link>
              </div>
              </div>
);

export default CardDetail;