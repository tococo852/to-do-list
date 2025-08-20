import "./styles.css";
import { createToDo } from "./toDoObject/toDoObject.js";
import { createWork } from "./workObject/workObject.js";
import { createProyect } from "./ProyectObject/proyect.js";
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

document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
  }
});
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
    return data;
  };
  return { makeToDo, makeWork };
};
//move to own module later, turns the factory functions into
//objects to be able to store it as json
//uses map to go throught the lists and make objects out of them
const toJsonData = (proyect) => {
  let data = proyect.getData();
  data.workList = data.workList.map((work) => {
    work = work.getData();
    work.toDoList = work.toDoList.map((toDo) => {
      return toDo.getData();
    });
    return work;
  });
  return data;
};
//takes a proyect and stores it in local
const storeProyect = (proyect) => {
  const jsonFile = JSON.stringify(toJsonData(proyect));
  localStorage.setItem("userData", jsonFile);
};
//takes a json and turns it back into a proyect object

const jsonToPoyect = (json) => {
  json.workList = json.workList.map((work) => {
    work.toDoList = work.toDoList.map(createToDo);
    return createWork(work);
  });
  return createProyect(json);
};
//loads the proyect from the local storage
//add situtation :there is no local storage yet
const loadProyect = () => {
  const objectData = JSON.parse(localStorage.getItem("userData"));
  if (objectData == null) {
    let proyect = createProyect({ oldWorkId: 0, oldToDoId: 0, workList: [] });
    let toDoData = {
      id: proyect.getNewToDoId(),
      title: `my first to do!`,
      description: `im here first and there will be more`,
      dueDate: `02-09-2026`,
      priority: 0,
      checklist: false,
    };
    let firstToDo = createToDo(toDoData);

    let workData = {
      id: proyect.getNewWorkId,
      name: `first work to do!`,
      toDoList: [firstToDo],
    };
    let firstWork = createWork(workData);
    proyect.AddWork(firstWork);
    return proyect;
  } else {
    return jsonToPoyect(objectData);
  }
};

const removeProyect = () => {
  localStorage.removeItem("userData");
};

window.addEventListener(
  "DOMContentLoaded",
  function () {
    let proyect = createProyect({ oldWorkId: 0, oldToDoId: 0, workList: [] });
    let maker = objectGenerator(proyect);
    let toDo1 = createToDo(maker.makeToDo());
    let work1 = createWork(maker.makeWork(4));

    work1.addTodo(toDo1);
    work1.getToDoById(1).changeTitle("changed by ref");
    work1.getToDosList().map((toDo) => {
      toDo.displayData();
    });
    let work2 = createWork(maker.makeWork(3));
    let work3 = createWork(maker.makeWork(5));
    let work4 = createWork(maker.makeWork(2));

    proyect.AddWork(work1);
    proyect.AddWork(work2);
    proyect.AddWork(work3);
    proyect.AddWork(work4);
    let proyect2 = loadProyect();
    console.log(proyect2.getData().workList[0].getData().toDoList[0].getData());
    console.log(JSON.parse(localStorage.getItem("userData")));
    //console.log(proyect2.getData().workList[0].getData().toDoList[0].getData())

    // on load, sethome should run by itself so the page is not blank
    //ToDo()
  },
  false,
);
