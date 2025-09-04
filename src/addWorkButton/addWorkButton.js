//goal is, returns a button that when pressed, displays a form to
//add a todo to the current work
import './addWorkButton.css'
import { loadProyect,saveProyect } from '../storageManager/storage';
import { displayWork } from '../displayWorkElement/displayWorkElement';
import { displaySidebar } from '../sideBarElement/sidebarListDisplay';
import { createWork } from '../workObject/workObject';
const submitNew=(e)=>{
   e.preventDefault();
   let valid=true
   if (valid) {
      let proyect=loadProyect()
      let data = new FormData(e.target)
      let workData= { id:proyect.getNewWorkId(), name:data.get('title'), toDoList: [] }
      let work=createWork(workData)


      proyect.AddWork(work)


      saveProyect(proyect)
      displaySidebar()
      displayWork(proyect.getWorkById(work.getId()))


      document.querySelector("#workCloseButton").click();

   }
   

 }

 const closeForm=(e)=>{
    console.log('clickon')
    let form=document.querySelector('#workForm')
    let closeButton=document.querySelector('#workCloseButton')

    form.removeEventListener('submit',submitNew)
    closeButton.removeEventListener('click', closeForm)
    form.classList.add('hidden')





 }

  const openForm=(e)=>{
    let form=document.querySelector('#workForm')
    form.classList.remove('hidden')
    let closeButton=document.querySelector('#workCloseButton')
    closeButton.addEventListener('click',closeForm)
    
    form.addEventListener('submit',submitNew)


 }


const addWorkButton=()=>{
    let addButton= document.createElement('button')
    addButton.classList.add('addWorkButton')
    addButton.innerText='add Work'

    addButton.addEventListener('click',openForm)
    return addButton
}

export {addWorkButton}