import { createToDo } from "../toDoObject/toDoObject.js";
import { createWork } from "../workObject/workObject.js";
import { createProyect } from "../ProyectObject/proyect.js";
//turns a proyect object into a json
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
const saveProyect = (proyect) => {
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
//if there no proyect, makes a template proyect
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
      id: proyect.getNewWorkId(),
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

const deleteProyect = () => {
  localStorage.removeItem("userData");
};

export { saveProyect, loadProyect, deleteProyect };
