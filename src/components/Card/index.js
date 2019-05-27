import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Card = ({ title, id,userId }) =>(

        <div class="card w-80 ml-5 mr-5 mt-3 " >
          <h5 class="card-header">Post número: {id}</h5>
          <div class="card-body">
            <h1 class="card-title ">{title}</h1>
            <p class="card-text">Pubilcado por el usuario número: {userId} </p>
            <a href={`/posts/${id}`} class="btn btn-primary">Ver mas</a>
            
          </div>
        </div>
    )    

export default Card;