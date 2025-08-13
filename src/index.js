import "./styles.css";
import { createToDo } from "./toDoObject/toDoObject.js";
import {createWork} from "./workObject/workObject.js"
import {createProyect} from "./ProyectObject/proyect.js"
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

window.addEventListener(
  "DOMContentLoaded",
  function () {
    let proyect=createProyect(0,0,[])
    let toDo1 = createToDo(proyect.getNewToDoId(),"title1", "desc", "date", 0, false);
    let toDo2 = createToDo(proyect.getNewToDoId(),"title2", "desc", "date", 0, false);
    let toDo3 = createToDo(proyect.getNewToDoId(),"title3", "desc", "date", 0, false);
    let toDo4 = createToDo(proyect.getNewToDoId(),"title1", "desc", "date", 0, false);
    let work1= createWork(proyect.getNewWorkId,'work1',[toDo1,toDo2,toDo3] )
    work1.addTodo(toDo4)
    work1.removeToDo(4)
    console.log(work1.getToDosList().map(toDo=>{toDo.displayData()
      return toDo
    }))

    // on load, sethome should run by itself so the page is not blank
    //ToDo()
  },
  false,
);
