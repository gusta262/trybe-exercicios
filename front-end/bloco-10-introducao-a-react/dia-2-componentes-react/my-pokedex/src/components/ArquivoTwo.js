import React from "react";
import ArquivoTestOne from "./ArquivoTestOne";

class ArquivoTwo extends React.Component {
  render() {
    const { poke } = this.props

    return (
      <div className="pokeCards">
        { poke.map((pok) => <ArquivoTestOne poke={ pok }/>) }
      </div>
    )
  }
}

export default ArquivoTwo