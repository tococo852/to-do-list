//generates a form window to get the data to make a todo
//on submit, loads proyect, gets current work id, uses proyect
//object methods to add the todo with the new data, savesproyects and ends
//probably hardest part of this proyect for current me

//needs an edit version and a add version
import "./ToDoForm.css";
//toDoForm is just the form that exist in the background
//it should always be there hence it should be called by
//the index on the start of the program
const toDoForm = () => {
  let formWindow = document.createElement("div");
  formWindow.classList.add("PopUpWindow");
  formWindow.classList.add("hidden");
  formWindow.id = "toDoForm";

  let content = document.createElement("div");
  content.classList.add("popUpFormContainer");

  let closeButton = document.createElement("button");
  closeButton.classList.add("closeButton");
  closeButton.id = "toDoCloseButton";

  content.appendChild(closeButton);

  let form = document.createElement("form");
  form.classList.add("toDoForm");
  form.innerHTML = `
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
  <input type="hidden" name="checklist" value="off">
  <input type="checkbox" id="checklist" name="checklist"><br>
  
  </div>


    <button class="ToDoSubmit" type="submit">Submit</button>

    
  `;

  content.appendChild(form);

  formWindow.appendChild(content);
  let center = document.querySelector(".center");
  center.appendChild(formWindow);
};

export { toDoForm };
