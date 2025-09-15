import "./styles.css";
import { createToDo } from "./toDoObject/toDoObject.js";
import { createWork } from "./workObject/workObject.js";
import {
  saveProyect,
  loadProyect,
  deleteProyect,
} from "./storageManager/storage.js";
import { displaySidebar } from "./sideBarElement/sidebarListDisplay.js";
import { displayWork } from "./displayWorkElement/displayWorkElement.js";
import { addToDoButton } from "./AddToDoButton/addToDoButton.js";
import { toDoForm } from "./ToDoForm/ToDoForm.js";
import { workForm } from "./workForm/workForm.js";
import { moveForm } from "./moveToDoForm/moveToDoForm.js";
if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const changeClass = (newClass, builder) => {
  const content = document.getElementById("content");
  let currClass = content.className;
  if (currClass != newClass) {
    content.innerHTML = "";
    content.classList.replace(currClass, newClass);
    builder();
  }
};


const objectGenerator = (proyect) => {
  const makeToDo = () => {
    let CurrDoId = proyect.getNewToDoId();
    let data = {
      id: CurrDoId,
      title: `title${CurrDoId}`,
      description: `description${CurrDoId}`,
      dueDate: `Date${CurrDoId}`,
      priority: 0,
      checklist: false,
    };
    return data;
  };
  const makeWork = (toDoQuantity) => {
    let toDoList = [];
    for (let i = 0; i < toDoQuantity; i++) {
      toDoList.push(createToDo(makeToDo()));
    }
    let id = proyect.getNewWorkId();
    let data = {
      id,
      name: `workName${id}`,
      toDoList,
    };
    return createWork(data);
  };
  return { makeToDo, makeWork };
};

window.addEventListener(
  "DOMContentLoaded",
  function () {
    let proyect = loadProyect();

    displaySidebar();
    displayWork(proyect.getData().workList[0]);
    toDoForm();
    addToDoButton();
    workForm();
    moveForm()
    //console.log(proyect2.getData().workList[0].getData().toDoList[0].getData())

    // on load, sethome should run by itself so the page is not blank
    //ToDo()
  },
  false,
);
