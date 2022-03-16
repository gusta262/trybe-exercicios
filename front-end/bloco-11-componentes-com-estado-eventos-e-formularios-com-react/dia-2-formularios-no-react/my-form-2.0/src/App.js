import React from "react";
import Cidade from "./componentsForms/Cidade";
import Cpf from "./componentsForms/Cpf";
import Email from "./componentsForms/Email";
import Estado from "./componentsForms/Estado";
import Imóvel from "./componentsForms/Imóvel";
import Name from "./componentsForms/Name";

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      cidade: '',
      estado: '',
      imovel: '',
    }
  }

  handleChange({ target }) {
    const { value, name } = target

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, email, cpf, cidade, estado, imovel } = this.state;
    
    return (
      <main>
        <fieldset>
          <Name value={ name } handleChange={ this.handleChange } />
          <Email value={ email } handleChange={ this.handleChange } />
          <Cpf value={ cpf } handleChange={ this.handleChange } />
          <Cidade  value={ cidade } handleChange={ this.handleChange } />
          <Estado value={ estado } handleChange={ this.handleChange } />
          <Imóvel value={ imovel } handleChange={ this.handleChange } />
        </fieldset>
  
        <fieldset>
  
        </fieldset>
      </main>
    );
  }
}

export default App;
