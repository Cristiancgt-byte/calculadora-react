import logo from './logo.svg';
import Contador from './componentes/calculadora'; // ruta corregida
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          zucker und kaffee
        </a>

        <Contador />
      </header>
    </div>
  );
}

export default App;
