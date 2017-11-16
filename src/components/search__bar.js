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

        this.state = { term: '' };
    }

    render() {
        return ( 
        <div className="search-bar">
        <input 
            value={this.state.term}
            onChange={event => this.onInputChange( event.target.value)} />
        </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;