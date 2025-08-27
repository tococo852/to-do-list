//goal is, returns a button that when pressed, displays a form to
//add a todo to the current work
import './addToDoButton.css'

 const submitNew=(e)=>{
    e.preventDefault();
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