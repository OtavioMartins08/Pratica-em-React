import React, { useState } from 'react';
import Frutas from './Frutas';
import Verduras from './Verduras';
import Legumes from './Legumes';

const FeiraOrganicos = () => {
  const [categoria, setCategoria] = useState('frutas');

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  return (
    <div>
      <h1>Feira de Orgânicos</h1>
      <div>
        <input
          type="radio"
          id="frutas"
          value="frutas"
          checked={categoria === 'frutas'}
          onChange={handleCategoriaChange}
        />
        <label htmlFor="frutas">Frutas</label>

        <input
          type="radio"
          id="verduras"
          value="verduras"
          checked={categoria === 'verduras'}
          onChange={handleCategoriaChange}
        />
        <label htmlFor="verduras">Verduras</label>

        <input
          type="radio"
          id="legumes"
          value="legumes"
          checked={categoria === 'legumes'}
          onChange={handleCategoriaChange}
        />
        <label htmlFor="legumes">Legumes</label>
      </div>

      {categoria === 'frutas' && <Frutas />}
      {categoria === 'verduras' && <Verduras />}
      {categoria === 'legumes' && <Legumes />}
    </div>
  );
};

export default FeiraOrganicos;
