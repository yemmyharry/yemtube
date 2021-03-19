import React, { Component } from "react";
import _ from "lodash"; 
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import style from "./style.css"

const API_KEY = "AIzaSyD_HVzz8_PsB4scLPlvrXccDcvZCoB0aJ8";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

  this.videoSearch('john')

  }
   videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
      console.log(videos);
    });
   }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoItemSelect={(selectedVideo)=> (this.setState({ selectedVideo}))} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
