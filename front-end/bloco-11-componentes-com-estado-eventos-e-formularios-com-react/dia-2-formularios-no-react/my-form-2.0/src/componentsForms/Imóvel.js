import React from "react";

class Imóvel extends React.Component {
  render() {
    const { handleChange } = this.props

    return (
      <div>
        <label>
          imóvel:
          Casa
          <input name="imovel" type='radio' onChange={handleChange}>
          </input>
        </label>
      </div>
    )
  }
}

export default Imóvel;
