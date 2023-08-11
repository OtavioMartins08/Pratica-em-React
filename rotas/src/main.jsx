import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sinopse from "./Sinopse.jsx";
import Listagem from "./Components/Listagem.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <routes>
      <router path="/" element={<App />} />

      <router path="/Sinopse" element={<Sinopse />} />
      <router path="/Listagem" element={<Listagem />} />
    </routes>
    </BrowserRouter>
  </React.StrictMode>,
)
