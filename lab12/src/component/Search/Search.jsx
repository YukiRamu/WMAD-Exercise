import React, { Component } from 'react';
import "./Search.scss";
import { APIContext } from '../../context/APIContext';

class Search extends Component {

  static contextType = APIContext;

  searchIssue(e) {
    e.preventDefault();
    let keyword = e.target.form[0].value;

    const result = this.context.state.issueDataArray.filter((elem) => elem.title.toLowerCase().includes(keyword.toLowerCase()));

    //update state in context api
    this.context.setIssueData(result);
  }

  clearSearch(e) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <APIContext.Consumer>
          {(value) => {
            const data = value.state;

            if (data.issueDataArray.length !== 0 && data.labelDataArray.length !== 0) {
              return (
                <>
                  <nav>
                    <form className="searchForm">
                      <input type="text" className="searchInput" placeholder="Type issue keyword..." />
                      <button type="submit" className="searchBtn" onClick={(e) => this.searchIssue(e)}>Search</button>
                    </form>
                    <button type="button" className="clearSearch" onClick={(e) => this.clearSearch(e)}>Clear Search</button>
                  </nav>
                </>);
            }
          }}
        </APIContext.Consumer>
      </>
    );
  }
}

export default Search;
