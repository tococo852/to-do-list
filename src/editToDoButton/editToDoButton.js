import { saveProyect } from "../storageManager/storage";
import { loadProyect } from "../storageManager/storage";
import { displaySidebar } from "../sideBarElement/sidebarListDisplay";
import { displayWork } from "../displayWorkElement/displayWorkElement";

const editToDoButton = (workId, toDoId) => {
  const submitEdit = (e) => {
    e.preventDefault();
   
    let valid = true;
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
    document.querySelector("#toDoCloseButton").click();
  };

  const closeForm = (e) => {
    let formWindow = document.querySelector("#toDoForm");
    let closeButton = document.querySelector("#toDoCloseButton");
    formWindow.removeEventListener("submit", submitEdit);
    closeButton.removeEventListener("click", closeForm);
    let form = document.querySelector(".toDoForm");
    let trueform=document.querySelector('.toDoForm')

      trueform.reset();
    formWindow.classList.add("hidden");
  };

  const openForm = (workId, toDoId) => {
    let formWindow = document.querySelector("#toDoForm");
    formWindow.classList.remove("hidden");
    let closeButton = document.querySelector("#toDoCloseButton");
    closeButton.addEventListener("click", closeForm);

    let proyect = loadProyect();

    let form = document.querySelector(".toDoForm");
    let toDoData = proyect.getWorkById(workId).getToDoById(toDoId).getData();
    form.elements.namedItem("title").value = toDoData.title;
    form.elements.namedItem("description").value = toDoData.description;
    form.elements.namedItem("dueDate").value = toDoData.dueDate;
    form.elements.namedItem("priority").value = toDoData.priority.toString();
    form.elements.namedItem("checklist")[1].checked = toDoData.checklist;

    formWindow.addEventListener("submit", submitEdit);
  };

  openForm(workId, toDoId);
};

export { editToDoButton };
