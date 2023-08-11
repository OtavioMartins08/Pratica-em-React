import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../Components/Products';
import Loading from '../Components/Loading';
import '../styles.css';

function Detalhes() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const productData = await getProductById(id);
      setProductDetails(productData);
    } catch (error) {
      console.error('Erro ao buscar detalhes do produto:', error);
    }
  };

  return (
    <div className="detalhes">
      {productDetails ? (
        <div className="card-container">
          <img src={productDetails.imagem} alt={productDetails.titulo} className="card-image" />
          <h2 className="card-title">{productDetails.titulo}</h2>
          <p className="card-description">{productDetails.descricao}</p>
          {productDetails.preco && (
            <div className="card-price">
              <img src="path_to_your_price_image.png" alt="Preço" className="price-image" />
              <p className="price-value">R${productDetails.preco.toFixed(2)}</p>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
      <Link to="/" className="go-back-button">Voltar</Link>
    </div>
  );
}

export default Detalhes;
