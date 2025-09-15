import { displayWork } from "../displayWorkElement/displayWorkElement";
import { loadProyect } from "../storageManager/storage";
import { addWorkButton } from "../addWorkButton/addWorkButton";
import { runDelete } from "../deleteWorkButton/deleteWorkButton";
//takes a work objects and turns it into an element

const makeWorkElement = (work) => {
  let workEle = document.createElement("div");
  workEle.classList.add("workSidebarDisplay");

  let workName = document.createElement("div");
  workName.classList.add("workSidebarName");
  workName.setAttribute("data-id", work.getId());
  workName.innerText = work.getName();

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("sidebarDelete");
  deleteButton.innerText = "X";
  workName.appendChild(deleteButton);
  workEle.appendChild(workName);

  let toDoListEle = document.createElement("ul");

  //make a list object and append the toDos to that
  work.getToDosList().map((toDo) => {
    //make an element for the toDO and append it to work ele
    let toDoEle = document.createElement("li");
    toDoEle.innerText = toDo.getData().title;

    toDoListEle.appendChild(toDoEle);
  });

  workEle.appendChild(toDoListEle);

  return workEle;
};
//grabs all works from proyects and creates a list of elements
//using the makeworkelements function
const makeSidebarElements = (proyect) => {
  let elementList = [];
  proyect.getData().workList.map((work) => {
    elementList.push(makeWorkElement(work));
  });
  return elementList;
};
//takes all the created elements and adds them to the sidebar
const displaySidebar = () => {
  let proyect = loadProyect();
  let elementList = makeSidebarElements(proyect);
  let sidebar = document.querySelector(".sidebar");
  sidebar.innerHTML = "";

  let sidebarHeader = document.createElement("div");
  sidebarHeader.classList.add("sidebarHeader");
  sidebarHeader.innerHTML = "All your works!";
  sidebarHeader.appendChild(addWorkButton());
  sidebar.appendChild(sidebarHeader);
  elementList.map((child) => {
    sidebar.appendChild(child);
  });
};

let sidebar = document.querySelector(".sidebar");
sidebar.addEventListener("click", runDelete);

sidebar.addEventListener("click", (e) => {
  if (e.target.matches(".workSidebarName") && !e.target.matches("button")) {
    let id = parseInt(e.target.dataset.id);
    let proyect = loadProyect();
    let work = proyect.getWorkById(id);
    displayWork(work);
  }
});
export { displaySidebar };
