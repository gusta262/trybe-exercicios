import React from "react";

class Email extends React.Component {
  render() {
    const { handleChange } = this.props

    return (
      <div>
        <label>
          Email:
          <input name="email" type='email' onChange={ handleChange }/>
        </label>
      </div>
    )
  }
}

export default Email;
