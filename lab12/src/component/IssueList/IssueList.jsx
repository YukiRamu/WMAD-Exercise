import React, { Component } from 'react';
import "./IssueList.scss";

class IssueList extends Component {

  //constructor
  constructor(props) {

  }

  /* methods */
  //When the page is loaded
  componentDidMount () {

  }

  render() {
    return (
      <>
        <section className="issueCardSection" id="issueCardSection">
          <div className="cardItem">
            <div className="cardTop">
              <img src="./photo.JPG" alt="avatar" />
              <p><span>#19</span> Generate favicon</p>
            </div>
            <div className="cardBottom">
              <p>Design</p>
              <p>Product</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default IssueList;
