import React from "react";
import ArquivoTestOne from "./ArquivoTestOne";
import { BsSearch } from 'react-icons/bs';

class ArquivoTwo extends React.Component {
    constructor() {
        super();

        this.state = {
            filtro: '',
        }

        this.handlePok = this.handlePok.bind(this)
    }


    handlePok = (event) => {
        this.setState({
            filtro: event.target.value
        })
    }


    render() {
        const { poke, } = this.props
        const { filtro } = this.state

        return (
            <div>
                <input id="search" type="text" onChange={ this.handlePok } /> <BsSearch />
                <div className="pokeCards">
                    {poke.filter((a) => a.name.toLowerCase().includes(filtro) )
                    .map((pok) => <ArquivoTestOne poke={pok} key={pok.id} />)}
                </div>
            </div>
        )
    }
}

export default ArquivoTwo