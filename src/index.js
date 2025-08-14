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
const objectGenerator=(proyect)=>{
  const makeToDo=()=>{
    let CurrDoId=proyect.getNewToDoId()
    let data={
      id:CurrDoId,
      title: `title${CurrDoId}`,
      description:`description${CurrDoId}`,
      dueDate:`Date${CurrDoId}`,
      priority:0,
      checklist:false
     }
     return(data)

  }
  const makeWork=(toDoQuantity)=>{
    let toDoList=[]
    for (let i = 0; i < toDoQuantity; i++) {
      toDoList.push(createToDo(makeToDo()))
    }
    let id=proyect.getNewWorkId()
    let data={
      id,
      name:`workName${id}`,
      toDoList,
    }
    return data
  }
  return {makeToDo,makeWork}

}
window.addEventListener(
  "DOMContentLoaded",
  function () {
    let proyect=createProyect(0,0,[])
    let maker=objectGenerator(proyect)
    let toDo1 = createToDo(maker.makeToDo());
    let toDo2 = createToDo(maker.makeToDo());
    let toDo3 = createToDo(maker.makeToDo());
    let toDo4 = createToDo(maker.makeToDo());
    let work1= createWork(maker.makeWork(4))
    work1.addTodo(toDo4)
    work1.getToDoById(5).changeTitle('changed by ref')
    
    work1.getToDosList().map(toDo=>{toDo.displayData()
    })

    // on load, sethome should run by itself so the page is not blank
    //ToDo()
  },
  false,
);
