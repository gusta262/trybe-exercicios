import React from "react";
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>XABLAU</h1>
        <ul>
          { tarefas.map((i) => Task(i)) }
        </ul>
      </div>
    )
  }
}

export default App;