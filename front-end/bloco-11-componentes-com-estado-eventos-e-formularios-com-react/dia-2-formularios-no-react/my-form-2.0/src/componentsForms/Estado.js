import React from "react";

class Estado extends React.Component {
  render() {
    const { handleChange } = this.props

    return (
      <div>
        <label>
          Estado:
          <input name="estado" onChange={ handleChange }/>
        </label>
      </div>
    )
  }
}

export default Estado;
