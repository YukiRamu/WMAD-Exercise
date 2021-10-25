import React, { Component } from 'react';
import "./App.scss";
import Search from '../Search/Search';
import IssueList from '../IssueList/IssueList';

class App extends Component {
  render() {
    return (
      <>
        <h1 className="header">GitHub Issue List</h1>
        <Search />
        <IssueList />
      </>
    );
  }
}

export default App;

