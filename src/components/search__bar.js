import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// functional component (dumb!, Presenational) -- not using ES6 class to allow it to have state

// const SearchBar = () => {
//     return <input />;
// };

// Class Component

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'Starting Value' };
    }

    render() {
        return ( 
        <div>
            <input 
            value={this.state.term}

            onChange={event => this.setState({ term: event.target.value})} />;
        </div>
        );
    }
}


export default SearchBar;