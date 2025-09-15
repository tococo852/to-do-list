import { loadProyect } from "../storageManager/storage";
import { saveProyect } from "../storageManager/storage";
import { displaySidebar } from "../sideBarElement/sidebarListDisplay";
import { displayWork } from "../displayWorkElement/displayWorkElement";
const deleteToDo = (workId, toDoId) => {
  let proyect = loadProyect();
  proyect.getWorkById(workId).removeToDo(toDoId);
  saveProyect(proyect);
  displaySidebar();
  displayWork(proyect.getWorkById(workId));
};

export { deleteToDo };
