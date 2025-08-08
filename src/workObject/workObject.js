const createWork =(id,name,toDoList)=>{
    let proyectName=name
    let _id=id
    let toDos=toDoList
    const changeName=(newName)=> {proyectName=newName}
    const getName=()=>{return proyectName}
    const getToDosList=()=>{return toDos}
    const getId=()=>{return _id}
    const addTodo=(toDo)=>{toDos.push(toDo)}
    const getIndex=(list,id)=>{
        let index= list.findIndex(obj => obj.id === id);
        if (index >= 0 ){
            return index
        }
        return null
    }
    //change to splice instead of filter to avoid deleting the reference
    const removeToDo=(toDoId)=>{
        return workList.splice(getIndex(ToDos,toDoId),1)
    }
    //it must fint 
    const getToDo=(toDoId)=>{
        return toDos.filter(currToDo=>{
                return currToDo.id===toDoId
    
            })[0]
}
    return {changeName, getName, getToDosList,addTodo,removeToDo,getId,getToDo}
}
export{createWork}