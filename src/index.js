import _ from "lodash"; 
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import style from "./style.css"


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
    YTSearch({ key: process.env.REACT_APP_API_KEY, term: term }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
      console.log(videos);
    });
   }

  render() {
// debounce helps prevent continual search ontype. basically it searches only every 300milliseconds
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoItemSelect={(selectedVideo)=> (this.setState({ selectedVideo}))} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
