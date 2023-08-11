import React from 'react';
import { Link } from 'react-router-dom';

function CardProdutos({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      {product.price && <p>Preço: R${product.price.toFixed(2)}</p>}
      <Link to={`/detalhes/${product.id}`}>Ver detalhes</Link>
    </div>
  );
}

export default CardProdutos;
