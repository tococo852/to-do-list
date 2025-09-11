import { saveProyect } from "../storageManager/storage";
import { loadProyect } from "../storageManager/storage";
import { displaySidebar } from "../sideBarElement/sidebarListDisplay";
import { displayWork } from "../displayWorkElement/displayWorkElement";

let wrapper =null
const submitEdit=(e, workId, toDoId)=>{
   e.preventDefault();

   //to do next
   //load the toDo object corresponding to the ids
   //use that data to fill out the form
   //change the add todo function to edit todo at the end on submit
   //there is no edit todo function in work, get the desired todo reference
   //and use todo functions to edit it according to the form
   
   let valid=false
   console.log('editsubmit triggered')
   if (valid) {
      let proyect=loadProyect()
      let data = new FormData(e.target)
      let toDoData= Object.fromEntries([['id',proyect.getNewToDoId()],...data.entries()])
      toDoData.checklist= toDoData.checklist=='on'
      let newToDo=createToDo(toDoData)

      let currWork=document.querySelector('.header')
      let workId= parseInt(currWork.dataset.id)

      proyect.getWorkById(workId).addTodo(newToDo)


      saveProyect(proyect)
      displaySidebar()
      displayWork(proyect.getWorkById(workId))



   }
         document.querySelector("#toDoCloseButton").click();


 }

 const closeForm=(e)=>{
    let formWindow=document.querySelector('#toDoForm')
    let closeButton=document.querySelector('#toDoCloseButton')
   console.log(wrapper)
    formWindow.removeEventListener('submit',wrapper)
    wrapper=null
    closeButton.removeEventListener('click', closeForm)
   let form = document.querySelector('.toDoForm')
   form.reset()

    formWindow.classList.add('hidden')





 }

  const openForm=(workId,toDoId)=>{
    let formWindow=document.querySelector('#toDoForm')
    formWindow.classList.remove('hidden')
    let closeButton=document.querySelector('#toDoCloseButton')
    closeButton.addEventListener('click',closeForm)

    let proyect=loadProyect()

    let form = document.querySelector('.toDoForm')
    let toDoData = proyect.getWorkById(workId).getToDoById(toDoId).getData()
    //open form needs to auto fill the form using toDo data
   form.elements.namedItem('title').value= toDoData.title
   form.elements.namedItem('description').value=toDoData.description
   form.elements.namedItem('dueDate').value=toDoData.dueDate
   form.elements.namedItem('priority').value=toDoData.priority.toString()
   form.elements.namedItem('checklist').checked=toDoData.checklist 


    form.addEventListener('submit',wrapper)
    wrapper=null


 }



const editToDoButton=(workId,toDoId)=>{
    wrapper= (e)=> submitEdit(e,workId, toDoId)
    openForm(workId,toDoId)
}


export{editToDoButton}