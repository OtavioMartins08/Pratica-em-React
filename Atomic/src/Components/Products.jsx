const API_URL = 'https://63069afec0d0f2b8011f9944.mockapi.io/produtos';

export const getAllProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar produto por ID:', error);
    return null;
  }
};

export const adicionarProduto = async (produto) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
    return null;
  }
};
