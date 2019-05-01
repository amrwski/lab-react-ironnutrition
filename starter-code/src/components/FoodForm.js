import React, { Component } from "react"

export default class AddFoodForm extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
    quantity: 0
  }

  handleChange = event => {
    let { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleAdd = event => {
    event.preventDefault()
    const { name, calories, image, quantity } = this.state
    const food = {
      name,
      calories,
      image,
      quantity
    }
    this.props.addFood(food)
    this.setState({
      name: "",
      calories: "",
      image: "",
      quantity: 0
    })
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleAdd}>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />

          <label>Calories</label>
          <input type="text" name="calories" onChange={this.handleChange} value={this.state.calories} />

          <label>Image Link</label>
          <input type="text" name="image" onChange={this.handleChange} value={this.state.image} />

          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            onChange={this.handleChange}
            value={this.state.quantity}
          />

          <input type="submit" value="Add Food" />
        </form>
      </React.Fragment>
    )
  }
}
