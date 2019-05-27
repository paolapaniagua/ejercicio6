import React from 'react';
import Nav from '../../components/Nav';
import Posts from '../../containers/Posts';


const Home = () => {
  return(
    <div className="home-page">
      <Nav key="Lista de posteos" />
      <div className="container">
          <Posts/>
      </div>
    </div>
  );
}

export default Home;