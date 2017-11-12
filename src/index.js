import React from 'react';
import ReactDOM from 'react-dom'; 

import SearchBar from './components/search__bar';

// Youtube Search API v4 
const API_KEY = 'AIzaSyBICv_6WJ76NB9M0Y0V4Jv0A7e4Vz9OHeQ';

// Create a new component. This component should produce some html

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

// Take this component's generated html and put it on the page (In the dom)

ReactDOM.render(<App />, document.querySelector('.container'));