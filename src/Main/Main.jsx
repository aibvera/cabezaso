import { useState } from 'react';
import './Main.css';
import bertaImg from '../assets/bertaPalta.png'

function Main() {

  // Overlay
  const [showOverlay, setShowOverlay] = useState(false);
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <main>

      <h1>Mírala que bonita</h1>
      <img
        src={bertaImg}
        alt="Berta"
        className="berta"
        onClick={toggleOverlay}
      />
      <p>(Hazle click)</p>

      {/* Overlay de ayuda */}
      {showOverlay && (
        <div className="clippy_overlay" onClick={toggleOverlay}>
          <div className="clippy_help">
            <p>¿Vamos mañana 19/10/2025 a ver la última de PTA en Cineplanet de Plaza San Miguel a las 9:35 pm? Just answer by SMS</p>
            <p>(Si dices que no la berta llora)</p>
            <button onClick={toggleOverlay}>Cerrar</button>
          </div>
        </div>
      )}

    </main>
  )
}

export default Main;
