import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../Components/Products';
import Loading from '../Components/Loading';

function Vitrine() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productIds = ['33', '34', '35', '36', '37', '38', '39', '40'];
      const productsData = await Promise.all(productIds.map(id => getProductById(id)));
      setProducts(productsData);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.titulo && product.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className='vitrine-title'>Vitrine</h1>
      <div className="vitrine-container">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="vitrine-container">
        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <p>Carregando produtos...</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <img src={product.imagem} alt={product.titulo} className="product-image" />
              <h3>{product.titulo}</h3>
              <p>{product.descricao}</p>
              {product.valor ? <p>Preço: {product.valor}</p> : <p>Preço indisponível</p>}
              <Link to={`/detalhes/${product.id}`}>Ver detalhes</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Vitrine;
