const createProyect =(name)=>{
    let proyectName=name
    let toDos=[]
    const changeProyectName=(newName)=> {proyectName=newName}
    const getProyectName=()=>{return proyectName}
    const getToDos=()=>{return toDos}
    const addTodo=(toDo)=>{toDos.push(toDo)}
    //change to splice instead of filter to avoid deleting the reference
    const removeToDo=(toDo)=>{
        if(toDos.length===0){
            return
        }
        else{
            toDos=toDos.filter(currToDo=>{
                return currToDo.id!=toDo.id
            })
        }
    }
    return {changeProyectName, getProyectName, getToDos,addTodo,removeToDo}
}