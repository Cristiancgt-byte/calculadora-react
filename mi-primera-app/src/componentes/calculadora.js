import React, { useState } from 'react';
import Botones from './botones';

function Contador() {
  const [texto, setTexto] = useState('');

  function clickBoton(valor) {
    if (valor === '=') {
      try {
        const res = eval(texto);
        setTexto(res.toString());
      } catch {
        setTexto('Error');
      }
    } else {
      setTexto(texto + valor);
    }
  }

  function limpiar() {
    setTexto('');
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>calculadora</h2>
      <input 
        type="text" 
        value={texto} 
        readOnly 
        style={{ width: '300px', height: '40px', fontSize: '20px', marginBottom: '10px', textAlign: 'right' }} 
      />
      <br />
      <Botones onClick={clickBoton} />
      <br />
      <button onClick={limpiar} style={{ padding: '10px 20px', marginTop: '10px' }}>Limpiar</button>
    </div>
  );
}

export default Contador;
