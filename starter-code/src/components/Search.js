import React, { Component } from "react"

export default class Search extends Component {
  state = {
    // name: "",
    value: ""
  }

  handleSearch = event => {
    let { value } = event.target
    const search = value
    this.props.searchFood(search)
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <div>
        <label>Search</label>
        <input type="text" name="search" onChange={this.handleSearch} value={this.state.search} />
      </div>
    )
  }
}
