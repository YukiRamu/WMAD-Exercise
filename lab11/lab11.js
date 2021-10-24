/* Fetch data */
let userDataArray = []; //use this as a temp db

const getUsers = async () => {
  try {
    const response = await axios.get(`https://reqres.in/api/users`);
    if (!response === 200) {
      throw response.statusText;
    } else {
      const userData = await response.data;
      userDataArray = userData.data; //for delete and update function
      return userDataArray;
    }
  } catch (error) {
    console.error(`${error}: Unable to fetch user data`);
  }
};

/* Show data */
const showUsers = (userList) => {
  let html = `
  ${userList.map(e => (
    `<div class="cardItem">
      <div class="cardLeft">
        <img src="${e.avatar}" alt="avatar">
      </div>
      <div class="cardRight">
        <div>
          <p>${e.first_name} ${e.last_name}</p>
          <button type="button" class="updateUserBtn" id="updateUserBtn" onclick="updateUser('${e.id}')">Update</button>
        </div>
        <div>
          <p>${e.email}</p>
          <button type="button" class="deleteUserBtn" id="deleteUserBtn" onclick="deleteUser('${e.id}')">Delete</button>
        </div>
      </div>
    </div>`
  )).join("")}
  `;
  userCardSection.innerHTML = html;
};

/* Update user */
const updateUser = (id) => {
  const targetUser = userDataArray.filter(e => e.id == id); //data already stored on a temp array

  //fill data
  fillData(targetUser);
  //open popup
  updateForm.classList.add("show");
  //add dataset to the form to identify which data is updated
  updateForm.dataset.id = id;

  //show update button
  createBtn.style.display = "none";
  updateBtn.style.display = "block";
};

updateBtn.addEventListener("click", (e) => {

  //validation check
  if (emailInput.value === "" || nameInput.value === "") {
    alert("Please enter both name and email address");
    return false;
  }

  const updatedObj = {
    avatar: avatarPhoto.value,
    email: emailInput.value,
    first_name: nameInput.value.split(" ")[0],
    id: Date.now(), //new id
    last_name: nameInput.value.split(" ")[1],
  };

  //find idex of the updated element
  const index = userDataArray.findIndex(elem => elem.id == e.target.form.dataset.id);

  //update data
  userDataArray.splice(index, 1, updatedObj);
  showUsers(userDataArray);

  //close pop up
  updateForm.classList.remove("show");
  nameInput.value = "";
  emailInput.value = "";
  avatarPhoto.value = "";
  return userDataArray;
});

/* Delete user */
const deleteUser = (id) => {
  const deletedUserArray = userDataArray.filter(elem => elem.id != id);
  userDataArray = deletedUserArray;
  showUsers(userDataArray);
};

/* Create user*/
createBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  //validation check
  if (emailInput.value === "" || nameInput.value === "") {
    alert("Please enter both name and email address");
    return false;
  }

  //**********************  */when no photo was chosed for avator
  //avatarPhoto.value === "" ? avatarPhoto.value = "./photo.JPG" : "";

  const data = {
    avatar: avatarPhoto.value,
    email: emailInput.value,
    first_name: nameInput.value.split(" ")[0],
    id: Date.now(), //new id
    last_name: nameInput.value.split(" ")[1],
  };

  //create
  userDataArray.push(data); //add a new data into a temp DB

  try {
    const res = await axios.post(`https://reqres.in/api/users`, userDataArray);
    if (!res === 201) {
      throw res.statusText;
    } else {
      const updatedData = await res.data;
      userDataArray = updatedData; //for delete and update function
      showUsers(userDataArray);

      //close pop up
      updateForm.classList.remove("show");
      nameInput.value = "";
      emailInput.value = "";
      avatarPhoto.value = "";
      return userDataArray;
    }
  } catch (error) {
    console.error(`${error}: Unable to create user data`);
  }
});


/* Fill data on the pop-up */
const fillData = (targetUser) => {
  console.log(targetUser)
  nameInput.value = targetUser[0].first_name + " " + targetUser[0].last_name;
  emailInput.value = targetUser[0].email;
};

/* Window Open */
window.addEventListener("DOMContentLoaded", async () => {
  const userList = await getUsers(); //array of obj
  showUsers(userList);
});

/* Open pop up */
popUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //show create button
  createBtn.style.display = "block";
  updateBtn.style.display = "none";

  nameInput.value = "";
  emailInput.value = "";
  updateForm.classList.toggle("show");
});
