import React, { useState } from 'react';
import './styles.css';

const NomeSobrenome = () => {
  const [primeiroNome, setPrimeiroNome] = useState('');
  const [sobrenomes, setSobrenomes] = useState('');

  const handlePrimeiroNomeChange = (event) => {
    setPrimeiroNome(event.target.value);
  };

  const handleSobrenomesChange = (event) => {
    setSobrenomes(event.target.value);
  };

  const mostrarInformacoes = () => {
    const nomeCompleto = `${primeiroNome} ${sobrenomes}`;

    // Verifica se o usuário digitou ambos o primeiro nome e sobrenomes antes de mostrar as informações
    if (primeiroNome.trim() !== '' && sobrenomes.trim() !== '') {
      const nomes = nomeCompleto.split(' ');
      const totalSobrenomes = nomes.length - 1;

      return (
        <div className="informacoes">
          <p>Nome completo: {nomeCompleto}</p>
          <p>Primeiro nome: {primeiroNome}</p>
          <p>Total de sobrenomes: {totalSobrenomes}</p>
        </div>
      );
    } else {
      return (
        <div className="informacoes">
          <p>Preencha ambos os campos acima para ver as informações.</p>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <h1>Nome e Sobrenome</h1>
      <div className="input-container">
        <label htmlFor="primeiroNome">Primeiro nome:</label>
        <input
          type="text"
          id="primeiroNome"
          value={primeiroNome}
          onChange={handlePrimeiroNomeChange}
          placeholder="Digite seu primeiro nome"
        />
      </div>
      <div className="input-container">
        <label htmlFor="sobrenomes">Sobrenomes:</label>
        <input
          type="text"
          id="sobrenomes"
          value={sobrenomes}
          onChange={handleSobrenomesChange}
          placeholder="Digite seus sobrenomes"
        />
      </div>
      {mostrarInformacoes()}
    </div>
  );
};

export default NomeSobrenome;
