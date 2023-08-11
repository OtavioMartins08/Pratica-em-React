import React from 'react';
import { Link } from 'react-router-dom';
import vetor from '../assets/vetor.png';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bem-vindo à Atomic Sweet Shop</h1>
        <img src={vetor} alt="Boas-vindas" /> 
        <p>
        Com os doces mais saborosos e irresistíveis, a Atomic Sweet Shop é a sua doce jornada para a felicidade!
        </p>
        <Link to="/vitrine" className="explore-btn">
          Explore a Vitrine
        </Link>
      </div>
    </div>
  );
}

export default Home;
