import { makeToDoCard } from "../toDoCard/toDoCard.js";
import { loadProyect } from "../storageManager/storage.js";
import "./displayWork.css";
const displayWork = (work) => {
  let proyect=loadProyect()
    let header = document.querySelector(".header");
  let mainDisplay = document.querySelector(".mainDisplay");
  mainDisplay.innerHTML = "";

  if (proyect.getData().workList.length==0) {
    header.innerHTML='Seems there is no works in this proyect'
  }
  else{

  header.innerHTML = work.getName();
  header.setAttribute("data-id", work.getId());

  work.getToDosList().map((toDo) => {
    let card = makeToDoCard(toDo);
    mainDisplay.appendChild(card);
  });
}
};

export { displayWork };
