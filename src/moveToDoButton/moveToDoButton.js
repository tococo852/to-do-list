//make a move todo form
//add close/open/submit functions
//submit objective: get current todo from current work and delete it
//go to targeted work and add the copy of the todo

import { createMoveSelection } from "../moveToDoForm/moveToDoForm";
const moveToDoButton = (workId, toDoId) => {
    const submitmove = (e) => {
    e.preventDefault();
   
    let valid = false;
    if (valid) {
      let proyect = loadProyect();
      let data = new FormData(e.target);
      let toDoData = Object.fromEntries([["id", toDoId], ...data.entries()]);
      toDoData.checklist = toDoData.checklist == "on";

      let oldToDo = proyect.getWorkById(workId).getToDoById(toDoId);

      oldToDo.changeTitle(toDoData.title);
      oldToDo.changeDescription(toDoData.description);
      oldToDo.changeDueDate(toDoData.dueDate);
      oldToDo.changePrio(toDoData.priority);
      oldToDo.changeCheckList(toDoData.checklist);

      saveProyect(proyect);
      displaySidebar();
      displayWork(proyect.getWorkById(workId));
    }
    document.querySelector("#moveCloseButton").click();
  };

  const closeForm = (e) => {
    let formWindow = document.querySelector("#moveForm");
    let closeButton = document.querySelector("#moveCloseButton");
    formWindow.removeEventListener("submit", submitmove);
    closeButton.removeEventListener("click", closeForm);


    formWindow.classList.add("hidden");
  };
   
    const openForm=()=>{
        let formWindow = document.querySelector("#moveForm");
    formWindow.classList.remove("hidden");

    let closeButton = document.querySelector("#moveCloseButton");
    closeButton.addEventListener("click", closeForm);

    formWindow.addEventListener("submit", submitmove);
    }
    createMoveSelection(workId)
    openForm()
};

export { moveToDoButton };
