// 1. Create a function that counts the integers number of digits.
// count(318) // Expected output 3

const countDigit = (num) => {
  return num.toString().split("").length;
};
console.log(countDigit(3188));;


// 2. Create a Table with 3 rows and 3 columns using Javascript
const table = document.querySelector(".table");
const createTable = () => {
  let html = `
        <table>
        <tr>
          <th>Company</th>
          <th>Contact Person</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Amazon</td>
          <td>Paul Smith</td>
          <td>USA</td>
        </tr>
      </table>
    `;
  table.innerHTML = html;
};
createTable();

// 3. Create a counter using html, js and css. There should be a (+) button and (-) button which will increment and decrement the value.
// Note: Value cannot go below 0

const number = document.querySelector(".number");
let num = 0;
const increment = () => {
  number.innerHTML = `Counter : ${num++}`;
};

const decrement = () => {
  num === 0 ? number.innerHTML = `Counter : ${num} ` : number.innerHTML = `Counter : ${num--}`;
};

// 4. Create a form, having values Name, Email, Password and console those values entered by the user on submit button.
const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(`Name: ${e.target.form[0].value}`);
  console.log(`Email: ${e.target.form[1].value}`);
  console.log(`Password: ${e.target.form[2].value}`);
});