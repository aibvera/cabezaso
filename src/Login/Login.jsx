import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ validUsers, setCurrentUser }) {
  const navigate = useNavigate();

  // Navegación (por hacer)
  const goToMain = () => {
    navigate('/main');
  };

  // Estados para el formulario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginState, setLoginState] = useState('');
  const [tryCounter, setTryCounter] = useState(1);

  // Estados para Clippy
  const [showClippy, setShowClippy] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  // Función para clic en login
  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página

    // Contador de intentos
    setTryCounter((prev) => {
      const newCount = prev + 1;

      // Mostrar clippy al llegar a 10 intentos
      if (newCount >= 10) {
        setShowClippy(true);
      }

      return newCount;
    });

    // Buscar usuario válido
    const user = validUsers.find(
      (u) => u.username === username && u.password === password
    );

    // Validación
    if (user) {
      // Guarda usuario en el estado currentUser
      setCurrentUser(user);
      goToMain();
    } else {
      setLoginState(`❌ Tu puedes (${tryCounter})`);
    }
  };

  // Función para abrir y cerrar overlay
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <main className="poppins-regular">

      <div className="main_login">

        <form id="login_form" className="login_form" onSubmit={handleSubmit}>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="login_username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="login_password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sorpresa</button>
        </form>

        <p id="login_state">{loginState}</p>

      </div>

      {/* Clippy aparece después de 10 intentos */}
      {showClippy && (
        <img
          src="/assets/clippy.png"
          alt="Clippy"
          className="clippy"
          onClick={toggleOverlay}
        />
      )}

      {/* Overlay de ayuda */}
      {showOverlay && (
        <div className="clippy_overlay" onClick={toggleOverlay}>
          <div className="clippy_help">
            <p>Tu hija.</p>
            <p>Un buen pan.</p>
            <button onClick={toggleOverlay}>Cerrar</button>
          </div>
        </div>
      )}

    </main>
  );

}

export default Login;
