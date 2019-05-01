import React, { Component } from "react"
import foods from "./foods.json"
import "./App.css"
import FoodBox from "./components/FoodBox.js"

class App extends Component {
  render() {
    return (
      <div>
        <FoodBox food={foods} />
      </div>
    )
  }
}

export default App
