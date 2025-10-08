function Botones(props) {
  const botones = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', maxWidth: '300px', margin: 'auto' }}>
      {botones.map(function(boton) {
        return (
          <button 
            key={boton} 
            onClick={function() { props.onClick(boton); }} 
            style={{ padding: '20px', fontSize: '18px' }}
          >
            {boton}
          </button>
        );
      })}
    </div>
  );
}

export default Botones;
