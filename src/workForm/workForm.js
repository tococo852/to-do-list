//generates a form window to get the data to make a todo
//on submit, loads proyect, gets current work id, uses proyect
//object methods to add the todo with the new data, savesproyects and ends
//probably hardest part of this proyect for current me

//needs an edit version and a add version
import "./workForm.css";
//toDoForm is just the form that exist in the background
//it should always be there hence it should be called by
//the index on the start of the program
const workForm = () => {
  let formWindow = document.createElement("div");
  formWindow.classList.add("PopUpWindow");
  formWindow.classList.add("hidden");
  formWindow.id = "workForm";

  let content = document.createElement("div");
  content.classList.add("popUpFormContainer");

  let closeButton = document.createElement("button");
  closeButton.classList.add("closeButton");
  closeButton.id = "workCloseButton";
  closeButton.innerText = "X";
  content.appendChild(closeButton);

  let form = document.createElement("form");
  form.classList.add("workForm");
  form.innerHTML = `
    <div>
    
    <label for="title">Work name:</label><br>
    <input type="text" id="title" name="title"><br>
  
  </div>


    <button class="ToDoSubmit" type="submit">Submit</button>

    
  `;

  content.appendChild(form);

  formWindow.appendChild(content);
  let center = document.querySelector(".center");
  center.appendChild(formWindow);
};

export { workForm };
