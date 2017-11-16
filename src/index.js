import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search'
import VideoList from './components/video__list'
import VideoDetail from './components/video__detail'
import SearchBar from './components/search__bar';

// Youtube Search API v4 
const API_KEY = 'AIzaSyBICv_6WJ76NB9M0Y0V4Jv0A7e4Vz9OHeQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.videoSearch('stink');

    
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: 'term' }, (videos) => {
      this.setState({
        videos: videos, /* Since these are the same, we can just put ({ videos }) */
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated html and put it on the page (In the dom)

ReactDOM.render(<App />, document.querySelector('.container'));