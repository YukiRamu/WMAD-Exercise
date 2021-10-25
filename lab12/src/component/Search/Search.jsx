import React, { Component } from 'react';
import "./Search.scss";

class Search extends Component {

  //constructor
  constructor(props) {

  }

  //methods
  
  render() {
    return (
      <>
        <nav>
          <form className="searchForm">
            <input type="text" className="searchInput" id="searchInput" placeholder="Type issue keyword..." />
            <button type="submit" class="searchBtn" id="searchBtn">Search</button>
          </form>
          <button type="button" className="clearSearch" id="clearSearch">Clear Search</button>
        </nav>
      </>
    );
  }
}

export default Search;
