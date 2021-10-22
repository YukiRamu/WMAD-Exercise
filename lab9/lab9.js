// let promise = new Promise(function (resolve, reject) {
//   resolve("Your promise has been resolved!");

//   reject(new Error("ERROR")); // ignored
//   setTimeout(() => resolve("Hi")); // ignored
// });


//Question 6 & 7
// const getMsg = async () => {
//   return console.log("Hello there");
// };

// const main = async () => {
//   try {
//     const msg = await getMsg();
//     console.log(msg);
//   } catch (error) {
//     console.error(`${error}: failed to get message`);
//   }
// };


// //-----------------------
// getMsg()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.error(`${error}: failed to get message`);
//   });


////Search function
// There should be a search bar, and a button saying search.
// If someone clicks on the search, you have to search this array based on "title" key in the array. And then show that list of movie names on the Browser UI 

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchMovie(e.target.form[0].value);
});

const searchMovie = async (keyword) => {
  try {
    //fetch data
    const response = await fetch("movie.json");
    if (!response.ok) {
      throw response.statusText;
    } else {
      const movieData = await response.json();

      //search movie
      const result = movieData.filter((elem) => elem.title.toLowerCase().includes(keyword.toLowerCase()));
      console.log(result);
      //show result
      showResult(result);
    }
  } catch (error) {
    console.error(`${error}: Failed to fetch movie data`);
  }
};

const showResult = (result) => {
  let html = "";
  //pattern1
  // for (let i = 0; i < result.length; i++) {
  //   html += `<p>${result[i].title}</p>`;
  // };

  html += result.map(elem => (
    `<p>${elem.title}</p>`
  )).join("");
  searchResult.innerHTML = html;
};