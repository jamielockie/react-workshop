import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// functional component (dumb!, Presenational) -- not using ES6 class to allow it to have state

// const SearchBar = () => {
//     return <input />;
// };

// Class Component

class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log('event.target.value') } />;
    }

}


export default SearchBar;