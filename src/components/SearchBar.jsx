import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }

  onInputChange = (term) => {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  };

  render() {
    return (
      <div>
        {/* <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
          <input
           
            type="text"
            aria-describedby="basic-addon1"
          />
        </div> */}
        <input
          value={this.state.term}
          onChange={(e) => this.onInputChange(e.target.value)}
          type="text"
          placeholder="Search.."
          name="search"
          className="input-field"
        />
      </div>
    );
  }
}
