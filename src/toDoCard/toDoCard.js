const makeToDoCard=(toDo)=>{
    const toDoCard = document.createElement('div')
    toDoCard.innerHTML=toDo.getData().title
    return toDoCard

}

export {makeToDoCard}