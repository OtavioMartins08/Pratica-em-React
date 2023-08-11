import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  return (
    <div className="form-container">
      <h2>Contato</h2>
      {formStatus === 'success' && (
        <div className="form-message success">Mensagem enviada com sucesso!</div>
      )}
      {formStatus === 'error' && (
        <div className="form-message error">Erro ao enviar a mensagem. Tente novamente mais tarde.</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Enviar Mensagem" />
        </div>
      </form>
    </div>
  );
}

export default Form;
