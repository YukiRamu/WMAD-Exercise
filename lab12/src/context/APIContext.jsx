import React, { Component, createContext } from 'react';
import axios from 'axios';

const APIContext = createContext();

class APIProvider extends Component {

  /* state */
  constructor(props) {
    super(props);
    this.state = {
      issueDataArray: [],//master
      labelDataArray: [], //store label data for color change
      tempIssueDataArray: [], //for search function
      apiParam: {
        owner: "Facebook",
        repo: "react"
      }
    };
    this.setIssueData = this.setIssueData.bind(this);
    this.getIssueData = this.getIssueData.bind(this);
  }

  /* methods */
  componentDidMount() {
    this.getIssueData();
    this.getLabelData();
    this.tempIssueDataArray = this.issueDataArray;
  }

  //update issue data when searched
  setIssueData(issueData) {
    this.setState({ ...this.state, issueDataArray: issueData });
  };

  //get issue data
  async getIssueData() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${this.state.apiParam.owner}/${this.state.apiParam.repo}/issues`);
      if (!response === 200) {
        throw response.statusText;
      } else {
        const issueData = await response.data;
        this.setState({ ...this.state, issueDataArray: issueData, tempIssueDataArray: issueData });
        return this.state.issueDataArray;
      }
    } catch (error) {
      console.error(`${error}: Unable to fetch issue data`);
    }
  };

  //get label data
  async getLabelData() {
    try {
      const res = await axios.get(`https://api.github.com/repos/${this.state.apiParam.owner}/${this.state.apiParam.repo}/labels?q=per_page=100`);

      if (!res === 200) {
        throw res.statusText;
      } else {
        const labelData = await res.data;
        this.setState({ ...this.state, labelDataArray: labelData });
        return this.state.labelDataArray;
      }
    } catch (error) {
      console.error(`${error}: Unable to fetch label data`);
    }
  };

  render() {
    return (
      <>
        <APIContext.Provider value={{
          state: this.state,
          getIssueData: this.getIssueData,
          setIssueData: this.setIssueData
        }}>
          {this.props.children}
        </APIContext.Provider>
      </>
    );
  }
}

export { APIProvider as default, APIContext };
