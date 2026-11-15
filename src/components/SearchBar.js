import React from "react";
import './SearchBar.css';

function SearchBar(props) {

    return (

        <div>

            <input
                className="search-input"
                type="text"
                placeholder="Search product"
                value={props.searchTerm}
                onChange={function(event) {
                    props.setSearchTerm(event.target.value);
                }}
            />

            <button className="search-button">
                Search
            </button>

        </div>

    );

}

export default SearchBar;