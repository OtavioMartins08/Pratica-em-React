import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Home from '../src/Pages/Home';
import Vitrine from '../src/Pages/Vitrine';
import Detalhes from '../src/Pages/Detalhes';
import Sobre from '../src/Pages/Sobre';
import Form from '../src/Pages/Form';
import NotFound from '../src/Pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vitrine" element={<Vitrine />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
