import './App.css';
import ArquivoTwo from './components/ArquivoTwo';
import ListPoks from './components/ListPoks'

function App() {
  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <ArquivoTwo poke={ ListPoks }/>
    </div>
  );
}

export default App;
