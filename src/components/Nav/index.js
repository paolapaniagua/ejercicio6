import React from 'react';

const styles = { //Styled Component!
    content: {
      padding: 10,
    }
  };

const Nav = ({title}) => (
    <nav class="navbar navbar-dark bg-dark ">
    <div className="container ">

        <ul class="nav nav-pills ml-n4">
          <li class="nav-item">
            <a class="nav-link active " href="/">{title || "Posteos"}</a>
          </li>
        </ul>
  </div>
  </nav>
  )
  
  export default Nav;