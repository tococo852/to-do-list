import "./styles.css";
import {createToDo} from './toDoObject/toDoObject.js'
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
    const toDo=createToDo('title1','','','','','')
    toDo.displayData()
    toDo.changeTitle('newtitle')
    let a=toDo.displayData()
    console.log(a)

    // on load, sethome should run by itself so the page is not blank
    //ToDo()
  },
  false,
);
