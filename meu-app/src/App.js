import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './styles/App.css'; // Importação do CSS

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Cadastro</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
