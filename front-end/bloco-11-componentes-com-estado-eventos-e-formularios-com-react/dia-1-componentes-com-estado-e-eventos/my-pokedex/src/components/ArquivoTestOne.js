import React from "react";

class ArquivoTestOne extends React.Component {
  render() {
    const { poke: { name, type, image, id, averageWeight } } = this.props
    return (
      <div className="pokeCard">
        <div>
          <p>name: {name}</p>
          <p>type: {type}</p>
          <p>averageWeight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
        <img src={image}></img>
      </div>
    )
  }
}

export default ArquivoTestOne;