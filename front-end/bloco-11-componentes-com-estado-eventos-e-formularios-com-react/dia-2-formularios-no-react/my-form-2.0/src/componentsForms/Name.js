import React from "react";

class Name extends React.Component {
  render() {
    const { handleChange } = this.props

    return (
      <div>
        <label>
          Nome:
          <input name="name" onChange={ handleChange }/>
        </label>
      </div>
    )
  }
}

export default Name;
