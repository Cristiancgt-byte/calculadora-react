import React, { useState } from 'react';
import Botones from './botones';

const Calculadora = () => {
  const [input, setInput] = useState('');
  
  // Función para manejar los clicks de los botones
  const handleClick = (valor) => {
    if (valor === '=') {
      try {
        // Evalúa la expresión matemática (con precaución)
        // eslint-disable-next-line no-eval
        const resultado = eval(input);
        setInput(resultado.toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + valor);
    }
  };

  // Función para limpiar la pantalla
  const limpiar = () => setInput('');

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Calculadora</h2>
      <input 
        type="text" 
        value={input} 
        readOnly 
        style={{ 
          width: '300px', 
          height: '40px', 
          fontSize: '20px', 
          marginBottom: '10px',
          textAlign: 'right',
          paddingRight: '10px'
        }} 
      />
      <br />
      <Botones onClick={handleClick} />
      <br />
      <button 
        onClick={limpiar} 
        style={{ 
          marginTop: '10px', 
          padding: '10px 20px', 
          fontSize: '16px', 
          cursor: 'pointer' 
        }}
      >
        Limpiar
      </button>
    </div>
  );
};

export default Calculadora;
