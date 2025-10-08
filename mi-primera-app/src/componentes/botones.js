import React from 'react';

const Botones = ({ onClick }) => {
  const botones = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '10px', 
      maxWidth: '300px', 
      margin: 'auto' 
    }}>
      {botones.map((btn) => (
        <button
          key={btn}
          onClick={() => onClick(btn)}
          style={{ padding: '20px', fontSize: '18px', cursor: 'pointer' }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Botones;
