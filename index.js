import data from "./data.js";

const cost = ["low", "average", "intermdiate", "high"];
let count = 0;
let multiplier;

const position = document.querySelector(".position");
const positionNo = Math.floor(Math.random() * data.length);
const modal = document.querySelector(".modal");
const list = document.querySelector(".modal__list");
const coLiving = document.querySelector(".costOfLiving");
const overlay = document.querySelector(".overlay");
const refresh = document.querySelector(".refresh");
const salary = document.querySelector(".salary__calculated");
const finalSalary = document.querySelector(".salary__awarded");

//inital inner texts for variables position and cost of living
coLiving.innerText = cost[0];
position.innerText = data[positionNo].positionName;

//cost OF living text
function coLivingText() {
  coLiving.innerText = cost[count];
  if (count === 0) multiplier = 0.75;
  if (count === 1) multiplier = 0.85;
  if (count === 2) multiplier = 0.9;
  if (count === 3) multiplier = 1;
  count++;
  if (count === cost.length) {
    count = 0;
  }
  const number = parseFloat(salary.innerText);
  console.log(number);
  const finalSal = number * multiplier;
  console.log(multiplier);
  finalSalary.innerText = finalSal.toString();
}
//clicking the refresh icon

refresh.addEventListener("click", coLivingText);

// Populating the position  list tiems from data
data.forEach(function (item) {
  let li = document.createElement("li");
  li.classList.add("modal__item");
  list.appendChild(li);

  li.innerHTML += item.positionName;
});

//Show modal function
function showModal() {
  modal.classList.add("show");
  overlay.classList.add("visible");
}

// Hide modal function
function hideModal() {
  modal.classList.remove("show");
  overlay.classList.remove("visible");
}

// Show Modal
position.addEventListener("click", showModal);
overlay.addEventListener("click", hideModal);

// Selecting li elements
const listItem = document.querySelectorAll(".modal__item");

// Choosing the role functionality
listItem.forEach((item) => {
  item.addEventListener("click", () => {
    position.innerText = item.innerText;
    const person = data.find(
      ({ positionName }) => positionName === position.innerText
    );
    salary.innerText = person.baseSalary;
    console.log(typeof salary.innerText);
    console.log(person);
    hideModal();
    // console.log(item.innerText);
    // console.log("base-salary: " + baseSalary);
  });
});

//choosing the mulitplier

//slaray diplay

console.log(list);
