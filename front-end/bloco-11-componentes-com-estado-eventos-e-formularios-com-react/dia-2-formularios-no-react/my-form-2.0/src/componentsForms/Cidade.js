import React from "react";

class Cidade extends React.Component {
  render() {
    const { handleChange } = this.props

    return (
      <div>
        <label>
         Cidade:
          <input name="cidade" onChange={ handleChange }/>
        </label>
      </div>
    )
  }
}

export default Cidade;
