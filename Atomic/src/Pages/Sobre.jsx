import React from 'react';
import MyPhoto from '../assets/My-Photo.png';
import MySecondaryImage from '../assets/galileo.jpeg';
import '../styles.css';

function Sobre() {
  return (
    <div className="sobre-background">
      <img src={MyPhoto} alt="Minha foto" className="sobre-img-main" />
      <img src={MySecondaryImage} alt="Minha segunda imagem" className="sobre-img-secondary" />
      <h1 className="sobre-title">Sobre</h1>
      <div className="sobre-container center-content">
        <p>
          Olá! Sou Luís Otávio, 19 anos, do interior do RN. Estudo Tecnologia da Informação e sou aluno do projeto
          Galileo da Tech4me. Apaixonado por tecnologia e sempre buscando aprender e crescer.
        </p>
      </div>
    </div>
  );
}

export default Sobre;
