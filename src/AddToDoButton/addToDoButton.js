//goal is, returns a button that when pressed, displays a form to
//add a todo to the current work


const addToDoButton=()=>{
    let addButton= document.createElement('button')
    addButton.classList.add('addToDoButton')
    addButton.innerText='hi'

    return addButton
}

export {addToDoButton}