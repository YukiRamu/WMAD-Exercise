import React, { Component } from 'react';
import "./App.scss";
import Search from '../Search/Search';
import IssueList from '../IssueList/IssueList';
import APIProvider from "../../context/APIContext";

class App extends Component {
  render() {
    return (
      <>
        <APIProvider>
          <h1 className="header">GitHub Issue List</h1>
          <Search />
          <IssueList />
        </APIProvider>
      </>
    );
  }
}

export default App;

