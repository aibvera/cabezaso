import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import Login from './Login/Login.jsx';
import Main from './Main/Main.jsx';

function App() {
  
  // Usuarios válidos
  const validUsers = [
    {
      nombre: "Ga",
      username: "berta",
      password: "panconpalta"
    },
    {
      nombre: "Al",
      username: "papiberto",
      password: "tiramisu"
    }
  ];

  // Estado del usuario logeado (inicialmente null)
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <StrictMode>
      <BrowserRouter basename="/cabezaso">
        <Routes>
          {/* Solo mostrar Login */}
          <Route path="/" element={<Login validUsers={validUsers} setCurrentUser={setCurrentUser} />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );

}

createRoot(document.getElementById('root')).render(<App />);
