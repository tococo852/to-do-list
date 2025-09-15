//goal is, returns a button that when pressed, displays a form to
//add a todo to the current work
import "./addToDoButton.css";
import { loadProyect, saveProyect } from "../storageManager/storage";
import { createToDo } from "../toDoObject/toDoObject";
import { displayWork } from "../displayWorkElement/displayWorkElement";
import { displaySidebar } from "../sideBarElement/sidebarListDisplay";

const submitNew = (e) => {
  e.preventDefault();
  console.log("add submit triggered");
  let valid = true;
  if (valid) {
    let proyect = loadProyect();
    let data = new FormData(e.target);
    let toDoData = Object.fromEntries([
      ["id", proyect.getNewToDoId()],
      ...data.entries(),
    ]);
    toDoData.checklist = toDoData.checklist == "on";
    let newToDo = createToDo(toDoData);

    let currWork = document.querySelector(".header");
    let workId = parseInt(currWork.dataset.id);

    proyect.getWorkById(workId).addTodo(newToDo);

    saveProyect(proyect);
    displaySidebar();
    displayWork(proyect.getWorkById(workId));
  }
  document.querySelector("#toDoCloseButton").click();
};

const closeForm = (e) => {
  let form = document.querySelector("#toDoForm");
  let closeButton = document.querySelector("#toDoCloseButton");

  form.removeEventListener("submit", submitNew);
  closeButton.removeEventListener("click", closeForm);
      form.reset();

  form.classList.add("hidden");
};

const openForm = (e) => {
  let form = document.querySelector("#toDoForm");
  form.classList.remove("hidden");
  let closeButton = document.querySelector("#toDoCloseButton");
  closeButton.addEventListener("click", closeForm);

  form.addEventListener("submit", submitNew);
};

const addToDoButton = () => {
  let addButton = document.createElement("button");
  addButton.classList.add("addToDoButton");
  addButton.innerText = "add To Do";

  addButton.addEventListener("click", openForm);
  let main = document.querySelector(".main");
  main.appendChild(addButton);
};

export { addToDoButton };
