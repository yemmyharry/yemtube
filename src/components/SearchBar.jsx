import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "joy",
    };
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
          <input
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            type="text"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    );
  }
}
