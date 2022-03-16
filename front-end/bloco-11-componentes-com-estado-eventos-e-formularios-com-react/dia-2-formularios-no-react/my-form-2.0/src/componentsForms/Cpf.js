import React from "react";

class Cpf extends React.Component {
  render() {
    const { handleChange } = this.props

    return (
      <div>
        <label>
         CPF:
          <input name="cpf" onChange={ handleChange }/>
        </label>
      </div>
    )
  }
}

export default Cpf;
