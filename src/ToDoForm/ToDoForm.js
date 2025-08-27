//generates a form window to get the data to make a todo
//on submit, loads proyect, gets current work id, uses proyect
//object methods to add the todo with the new data, savesproyects and ends
//probably hardest part of this proyect for current me

//needs an edit version and a add version
import {loadProyect,saveProyect} from '../storageManager/storage.js'
import './ToDoForm.css';
//toDoForm is just the form that exist in the background
//it should always be there hence it should be called by
//the index on the start of the program
const toDoForm=()=>{

    let formWindow= document.createElement('div')
    formWindow.classList.add('PopUpWindow')
    formWindow.classList.add('hidden')

    let content=document.createElement('div')
    content.classList.add('popUpFormContainer')

    let closeButton= document.createElement('button')
    closeButton.classList.add('closeButton')
    closeButton.innerText='X'
    content.appendChild(closeButton)

    let form =document.createElement('form')
    form.classList.add('toDoForm')
    form.innerHTML= 
     `
    <div>
    
    <label for="title">To Do Name:</label><br>
    <input type="text" id="title" name="title"><br>

    <label for="description">short description of the task:</label><br>
<textarea id="description" name="description" rows="4" cols="50"></textarea>
    <label for="dueDate">Due Date:</label><br>
    <input type="date" id="dueDate" name="dueDate"><br>
    </div>

    <div>
  <label for="priority">Priority:</label><br>
  <select id="priority" name="priority">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

  <label for="checklist">Completed?:</label><br>
  <input type="checkbox" id="checklist" name="checklist"><br>
  
  </div>


    <button type="submit">Submit</button>

    
  `;

  content.appendChild(form)




  formWindow.appendChild(content)
  let center= document.querySelector('.center')
  center.appendChild(formWindow)
    
}

/*toDoForm should be hidden by default, the following calls
should reveal the existing form and edit it abit with selectors

edit form call should happen when the edit button gets click in a to DO

this should call the edit form call, which should make the form
that should always exists appear, but change the submit trigger
and the default values of the form

edit should pre fill all form slots with the current toDo data
and the submit should trigger the edit to Do in work function from
proyect, after which it should save

edit form call main job should be the prefilling of the form
and the new submit call

*/
const editFormCall=()=>{

}
/*similar to last function
new form call must manifest the to do form but this time with no 
prefill form, and needs a different submit, the submit for this
should first create new todo object with the data and then add it
to the work list


both of these functions will need to loadproyect and save proyect to keep the data
consistent, forcing a redraw will be necesary after subminitting as well
*/
const newFormCall=()=>{

}

export{toDoForm}