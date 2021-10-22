/* Fetch data */

let issueDataArray = []; //use this as a temp storage for search feature

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
      issueDataArray = issueData;
      return issueData;
    }
  } catch (error) {
    console.error(`${error}: Unable to fetch issue data`);
  }
};

/* Display Result */
const showData = (issueData) => {
  let html = `
    ${issueData.map(elem => (
    `<div class="cardItem" onclick="showIssueDetail('${elem.html_url}')">
        <div class="cardTop">
          <img src="${elem.user.avatar_url}" alt="avatar" onclick="showUser('${elem.user.html_url}')">
          <p><span>#${elem.number}</span> ${elem.title}</p>
        </div>
        <div class="cardBottom">
          ${elem.labels.map(e => (
      `<p>${e.name}</p>`
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
  showData(result);
};

/* Function Execution */
window.addEventListener("DOMContentLoaded", async () => {
  const data = await getIssueData();
  showData(data);
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchIssue(e.target.form[0].value);
});