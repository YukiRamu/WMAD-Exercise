import React, { Component } from 'react';
import "./IssueList.scss";
import { APIContext } from '../../context/APIContext';

class IssueList extends Component {

  //use context
  static contextType = APIContext;

  /* Link to issue page */
  showIssueDetail(url) {
    window.open(url);
  };

  /* Link to user profile page */
  showUser(url) {
    window.open(url);
  };

  /* Apply label color as a html attribute */
  applyLabelColor(labelName) {
    /* Create label color Object */
    const labelData = this.context.state.labelDataArray.map(elem => ({
      [elem.name]: elem.color
    }));

    //check if labelObjArray has the key same as labelName
    for (let i = 0; i < labelData.length; i++) {
      if (labelName in labelData[i]) {
        return { backgroundColor: `#${labelData[i][labelName]}` };
      }
    }
  };

  render() {
    return (
      <>
        <APIContext.Consumer>
          {(value) => {
            const data = value.state;
            if (data.issueDataArray.length !== 0 && data.labelDataArray.length !== 0) {
              return (
                <>
                  <section className="issueCardSection">
                    {data.issueDataArray.map(elem => (
                      <>
                        <div className="cardItem" key={elem.id} onClick={() => this.showIssueDetail(elem.html_url)}>
                          <div className="cardTop">
                            <img src={elem.user.avatar_url} alt="avatar" onClick={() => this.showUser(elem.user.html_url)} />
                            <p><span>#{elem.number}</span> {elem.title}</p>
                          </div>
                          <div className="cardBottom">
                            {elem.labels.map(label => (
                              <p key={label.id} style={this.applyLabelColor(label.name)}>{label.name}</p>
                            ))}
                          </div>
                        </div>
                      </>
                    ))}
                  </section>
                </>);
            } else {
              return (<h1>Loading...</h1>);
            }
          }}
        </APIContext.Consumer>
      </>
    );
  }
}

export default IssueList;
