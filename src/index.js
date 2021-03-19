import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/VideoList'

const API_KEY = "AIzaSyD_HVzz8_PsB4scLPlvrXccDcvZCoB0aJ8"

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             videos: []
        }

        YTSearch({key:API_KEY, term:'john'}, (videos)=>{
            this.setState({videos})
            console.log(videos)
        })
    }
    render(){
          return (
        <div>
            <SearchBar/>
            <VideoList videos={this.state.videos} />
        </div>
    ) 
    }
 
}


ReactDOM.render(<App />, document.getElementById('root'))