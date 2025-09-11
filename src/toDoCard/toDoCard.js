import './toDoCard.css'
const mainDis=document.querySelector('.mainDisplay')
import { editToDoButton } from '../editToDoButton/editToDoButton'
import { moveToDoButton } from '../moveToDoButton/moveToDoButton'
const edit=(e)=>{
    let card=e.target.closest('.toDoCard')
    let toDoId= parseInt(card.dataset.id)
    let workId= parseInt(document.querySelector('.header').dataset.id)
    
    editToDoButton(workId,toDoId)
}

const move=(e)=>{
    let card=e.target.closest('.toDoCard')
    let toDoId= parseInt(card.dataset.id)
    let workId= parseInt(document.querySelector('.header').dataset.id)
    moveToDoButton(workId,toDoId)
}

const eventSelect =(e)=>{
    if (e.target.classList.contains('toDoCardMoveButton')) {
        move(e)
    }
    if (e.target.classList.contains('toDoCardEditButton')) {
        edit(e)
    }
    
}

mainDis.addEventListener('click',eventSelect)
const makeToDoCard=(toDo)=>{
    const toDoCard = document.createElement('div')
    toDoCard.classList.add('toDoCard')
    toDoCard.setAttribute("data-id", toDo.getId())

    const top = document.createElement('div')
    top.classList.add('top')

    const title=document.createElement('div')
    title.classList.add('toDoTitle')
    title.innerText=toDo.getData().title
    const check=document.createElement('checklist')
    check.classList.add('toDoCheck')

    top.append(title,check)

    const date =document.createElement('div')
    date.classList.add('toDoDate')
    date.innerText=toDo.getData().dueDate

    const desc= document.createElement('div')
    desc.classList.add('toDoDesc')
    desc.innerText=toDo.getData().description
    
    const bottom= document.createElement('div')
    bottom.classList.add('bottom')

    const prios= document.createElement('div')
    prios.classList.add('prios')
    prios.innerText=toDo.getData().priority

    const buttons= document.createElement('div')
    buttons.classList.add('buttons')

    const moveButton= document.createElement('button')
    moveButton.classList.add('toDoCardMoveButton')
    moveButton.innerText='move'

    const editButton =document.createElement('button')
    editButton.classList.add('toDoCardEditButton')
    editButton.innerText='edit'

    buttons.appendChild(moveButton)
    buttons.appendChild(editButton)

    bottom.appendChild(prios)
    bottom.appendChild(buttons)

    toDoCard.append(top, date, desc, bottom)

    return toDoCard

}

export {makeToDoCard}