import "./moveToDoForm.css";
import { loadProyect } from "../storageManager/storage";
/*
  <select id="priority" name="priority">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>
*/
const createMoveSelection = (workId) => {
  let proyect = loadProyect();
  let work = proyect.getWorkById(workId);
  let origin = document.createElement("div");
  origin.id = "originPlaceholder";
  origin.innerText = `the work called "${work.getName()}"`;
  document.querySelector("#originPlaceholder").replaceWith(origin);

  let select = document.createElement("select");
  select.id = "selectPlaceholder";
  select.name = "destinyId";
  proyect.getData().workList.map((work) => {
    if (parseInt(work.getId()) != parseInt(workId)) {
      let option = document.createElement("option");
      option.value = work.getId();
      option.innerText = work.getName();
      select.appendChild(option);
    }
  });
  document.querySelector("#selectPlaceholder").replaceWith(select);
};
import "./moveToDoForm.css";

const moveForm = () => {
  let formWindow = document.createElement("div");
  formWindow.classList.add("PopUpWindow");
  formWindow.classList.add("hidden");
  formWindow.id = "moveForm";

  let content = document.createElement("div");
  content.classList.add("popUpFormContainer");

  let closeButton = document.createElement("button");
  closeButton.classList.add("closeButton");
  closeButton.id = "moveCloseButton";

  content.appendChild(closeButton);

  let form = document.createElement("form");
  form.classList.add("moveForm");

  form.innerHTML = `
    <div>
    <div>From</div>
    <div id="originPlaceholder"></div>

    <div>it moves to</div>

    <div id="selectPlaceholder"></div>

  </div>


    <button class="moveSubmit" type="submit">move</button>

    
  `;

  content.appendChild(form);

  formWindow.appendChild(content);
  let center = document.querySelector(".center");
  center.appendChild(formWindow);
};

export { moveForm, createMoveSelection };
