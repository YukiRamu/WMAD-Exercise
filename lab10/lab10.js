/* Fetch data */

let issueDataArray = []; //use this as a temp storage for search feature
let labelDataArray = []; //store label data for color change

const apiParam = {
  owner: "Facebook",
  repo: "react"
};

const getIssueData = async () => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${apiParam.owner}/${apiParam.repo}/issues`);
    if (!response === 200) {
      throw response.statusText;
    } else {
      const issueData = await response.data;
      console.log(issueData); //array
      issueDataArray = issueData; //for search function
      return issueData;
    }
  } catch (error) {
    console.error(`${error}: Unable to fetch issue data`);
  }
};

const getLabelData = async () => {
  try {
    const res = await axios.get(`https://api.github.com/repos/${apiParam.owner}/${apiParam.repo}/labels?q=per_page=100`);

    //url to search repo ID for facebook/react --> 10270250
    //https://api.github.com/search/repositories?q=${apiParam.repo}&per_page=100&page=1

  
    //https://api.github.com/repos/${apiParam.owner}/${apiParam.repo}/labels?q=per_page=100&page=1 \\30 results

    //https://api.github.com/search/labels?q=repository_id=10270250&per_page=100 //need to set label name

    if (!res === 200) {
      throw res.statusText;
    } else {
      const labelData = await res.data;
      labelDataArray = labelData; //for color change
      console.log(labelData);
      return labelData;
    }
  } catch (error) {
    console.error(`${error}: Unable to fetch label data`);
  }
};

/* Display Result */
const showData = (issueData, labelObjArray) => {
  let html = `
    ${issueData.map(elem => (
    `<div class="cardItem" onclick="showIssueDetail('${elem.html_url}')">
        <div class="cardTop">
          <img src="${elem.user.avatar_url}" alt="avatar" onclick="showUser('${elem.user.html_url}')">
          <p><span>#${elem.number}</span> ${elem.title}</p>
        </div>
        <div class="cardBottom">
          ${elem.labels.map(e => (
      `<p style="background-color: ${applyLabelColor(labelObjArray, e.name)}">${e.name}</p>`
    )).join("")}
        </div>
      </div>`
  )).join("")}
  `;

  issueCardSection.innerHTML = html;
};

/* Link to issue page */
const showIssueDetail = (url) => {
  window.open(url);
};

/* Link to user profile page */
const showUser = (url) => {
  window.open(url);
};

/* Search by title */
const searchIssue = (keyword) => {
  const result = issueDataArray.filter((elem) => elem.title.toLowerCase().includes(keyword.toLowerCase()));
  //display result
  showData(result, labelObjArray);
};

/* Create label color Object */
const createLabelObj = (labelArray) => {
  const obj = labelArray.map(elem => ({
    [elem.name]: elem.color
  }));
  return obj;
};

/* Apply label color as a html attribute */
const applyLabelColor = (labelObjArray, labelName) => {
  //check if labelObjArray has the key same as labelName
  for (let i = 0; i < labelObjArray.length; i++) {
    if (labelName in labelObjArray[i]) {
      return `#${labelObjArray[i][labelName]}`;
    }
  }
};

/* ========== Function Execution =========== */
window.addEventListener("DOMContentLoaded", async () => {
  const labels = await getLabelData();
  const labelObjArray = await createLabelObj(labels); //array of objects
  const data = await getIssueData();
  showData(data, labelObjArray);
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchIssue(e.target.form[0].value);
  e.target.form[0].value = "";
});

clearSearch.addEventListener("click", async (e) => {
  e.preventDefault();
  const issueList = await getIssueData();
  showData(issueList, labelObjArray);
});