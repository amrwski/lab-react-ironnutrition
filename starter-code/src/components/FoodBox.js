import React, { Component } from "react"
import FoodForm from "./FoodForm"
import Search from "./Search"

export default class FoodBox extends Component {
  state = {
    foodElements: this.props.food
  }

  addFood = food => {
    console.log(this.state)
    const foodsCopy = this.state.foodElements.slice()
    foodsCopy.unshift(food)

    this.setState({
      foodElements: foodsCopy
    })
  }

  searchFood = search => {
    let foodsCopy = this.state.foodElements.slice()
    foodsCopy = foodsCopy.filter(el => el.name.includes(search))
    console.log(foodsCopy)
    this.setState({
      foodElements: foodsCopy
    })
  }

  render() {
    const foodElements = this.state.foodElements.map((el, i) => {
      return (
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={el.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{el.name}</strong> <br />
                  <small>{el.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      )
    })

    return (
      <React.Fragment>
        <Search searchFood={search => this.searchFood(search)} />
        <FoodForm addFood={food => this.addFood(food)} />
        {foodElements}
      </React.Fragment>
    )
  }
}
