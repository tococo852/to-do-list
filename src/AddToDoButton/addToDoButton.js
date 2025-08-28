//goal is, returns a button that when pressed, displays a form to
//add a todo to the current work
import './addToDoButton.css'
import { loadProyect,saveProyect } from '../storageManager/storage';
import { createToDo } from '../toDoObject/toDoObject';
 const submitNew=(e)=>{
    e.preventDefault();
   let data = new FormData(e.target)
   let toDoData= Object.fromEntries([['id',1],...data.entries()])
   toDoData.checklist= toDoData.checklist=='on'
   let newToDo=createToDo(toDoData)

    console.log(newToDo)
    document.querySelector(".closeButton").click();

 }

 const closeForm=(e)=>{
    let form=document.querySelector('.PopUpWindow')
    let closeButton=document.querySelector('.closeButton')

    form.removeEventListener('submit',submitNew)
    closeButton.removeEventListener('click', closeForm)
    form.classList.add('hidden')





 }

  const openForm=(e)=>{
    let form=document.querySelector('.PopUpWindow')
    form.classList.remove('hidden')
    let closeButton=document.querySelector('.closeButton')
    closeButton.addEventListener('click',closeForm)
    
    form.addEventListener('submit',submitNew)


 }


const addToDoButton=()=>{
    let addButton= document.createElement('button')
    addButton.classList.add('addToDoButton')
    addButton.innerText='add To Do'

    addButton.addEventListener('click',openForm)
    let main= document.querySelector('.main')
    main.appendChild(addButton)
}

export {addToDoButton}