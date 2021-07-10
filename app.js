"use strict";
//2021/juli/10
//selectors
const courseInput = document.querySelector(".course-input");
const dropInputG = document.querySelector(".dropInputGrade");
const dropInputC = document.querySelector(".dropInputCredit");
const todoButton = document.querySelector(".todo-button");
const calcBtn = document.querySelector(".calc");
const todoList = document.querySelector(".todo-list");
const avgContainer = document.querySelector(".avg-container");
const copyrightTxt = document.getElementById("copyright");
copyrightTxt.innerText = `Copyright ${new Date().getFullYear()}`;
var grades = [];
todoButton.addEventListener("click", addCourse);
todoList.addEventListener("click", deleteCheck);
calcBtn.addEventListener("click", calcAvg);
let i = 0;
function addCourse(event) {
  i++;
  event.preventDefault();
  //if the course name is present, execute the function
  if (courseInput.value) {
    //
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoList.appendChild(todoDiv);
    //
    //
    //new course name
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = ` ${i}. ${courseInput.value}`;
    let newCourseName = courseInput.value;
    todoDiv.appendChild(newTodo);
    //
    //
    //new grade
    const newGrade = document.createElement("li");
    newGrade.classList.add("grade");
    newGrade.innerText = `Betyg: ${dropInputG.value}`;
    todoDiv.appendChild(newGrade);
    //
    //
    //new credit
    const newCredit = document.createElement("li");
    newCredit.classList.add("credit");
    newCredit.innerText = `Poäng: ${dropInputC.value}`;
    todoDiv.appendChild(newCredit);
    //
    //
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashBtn);
    //
    //
    //clear todo input value, after adding an item
    courseInput.value = "";
    //
    let gradeToNum;
    switch (dropInputG.value) {
      case "A":
        gradeToNum = 20;
        break;
      case "B":
        gradeToNum = 17.5;
        break;
      case "C":
        gradeToNum = 15;
        break;
      case "D":
        gradeToNum = 12.5;
        break;
      case "E":
        gradeToNum = 10;
        break;
      default:
        break;
    }
    let newObj = {
      course: newCourseName,
      grade: parseFloat(gradeToNum),
      credit: parseInt(dropInputC.value),
    };
    grades.push(newObj);
  } else {
  }
}
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}
function calcAvg(event) {
  event.preventDefault();
  if (grades.length == 0) {
    alert("Lägg till dina kurser och dina betyg för att gå vidare!");
  }
  if (grades.length != 0) {
    let sum = 0;
    let first = 0;
    let värden = 0;
    for (let x = 0; x < grades.length; x++) {
      let total = grades[x].grade * grades[x].credit;
      first += total;
      let v = grades[x].credit;
      värden += v;
    }
    let jämförelseTal = (first / värden).toFixed(2);

    const avgBox = document.createElement("div");
    avgBox.classList.add("avg");
    avgContainer.appendChild(avgBox);
    const avgField = document.createElement("li");
    avgField.classList.add("avgField");
    avgField.innerText = ` Ditt jämförelse tal är : ${jämförelseTal}`;
    avgContainer.appendChild(avgField);
  }
}
