import React, { Component } from 'react';
import "./Search.scss";
import { APIContext } from '../../context/APIContext';

class Search extends Component {

  static contextType = APIContext;

  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  searchIssue(e) {
    e.preventDefault();
    //validation check
    if (this.state.searchInput === "") {
      alert("Please enter the search keyword");
      return false;
    } else {
      let keyword = this.state.searchInput;
      const result = this.context.state.tempIssueDataArray.filter((elem) => elem.title.toLowerCase().includes(keyword.toLowerCase()));

      //update state in context api
      this.context.setIssueData(result);

      //clear input
      this.setState({ ...this.state, searchInput: "" });
    }
  }

  clearSearch(e) {
    e.preventDefault();
    //get all issue data again
    this.context.getIssueData();
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
                      <input
                        type="text"
                        className="searchInput"
                        placeholder="Type issue keyword..."
                        value={this.state.searchInput}
                        onChange={e => this.setState({ ...this.state, searchInput: e.target.value })} />
                      <button
                        type="submit"
                        className="searchBtn"
                        onClick={e => this.searchIssue(e)}>Search</button>
                    </form>
                    <button
                      type="button"
                      className="clearSearch"
                      onClick={e => this.clearSearch(e)}>Clear Search</button>
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
