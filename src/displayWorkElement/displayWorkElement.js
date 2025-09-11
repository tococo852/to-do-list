import { makeToDoCard } from "../toDoCard/toDoCard.js";
import "./displayWork.css";
const displayWork = (work) => {
  const header = document.querySelector(".header");
  header.innerHTML = work.getName();
  header.setAttribute("data-id", work.getId());

  const mainDisplay = document.querySelector(".mainDisplay");
  mainDisplay.innerHTML = "";
  work.getToDosList().map((toDo) => {
    let card = makeToDoCard(toDo);
    mainDisplay.appendChild(card);
  });
};

export { displayWork };
