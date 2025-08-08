
/*this fuction should have a list of works and administrate them
, this is basically the main page that will admin logic 

proyect should recive a work list and the oldest ids of such worklist
it will use those to make new works and to Do's

if this is a new proyect instead, it should recive a worklist with
1 work atleast, this work should just be the default work
with maybe 1 default todo, all of this should be made by another initialization function

proyect should be the manager of works, so it should be able to 
make new works and manage those works
*/

const createProyect=(oldWorkId,oldToDoId,workList)=>{
    let Works=workList
    let _currWorkId=oldWorkId
    let _currToDoId=oldToDoId
    const getNewWorkId =()=>{
        _currWorkId++
        return _currWorkId

    }
    const getNewToDoId=()=>{
        _currToDoId++
        return _currToDoId
    }
    const getIndex=(list,id)=>{
        let index= list.findIndex(obj => obj.id === id);
        if (index >= 0 ){
            return index
        }
        return null
    }
    //recives new work object and adds it to the list
    const AddWor=(newWorkk)=>{Works.push(newWork)}
    //must delete the target work in the list and all its todo's
    const DeleteWork=(workId)=>{
        return workList.splice(getIndex(workList,workId),1)
    }
    //must edit detailts of work
    const EditWork=(workId)=>{}
    //must add a new todo, to a existing work in worklist
    const AddToDoInWork=(workId,toDo)=>{
        workList[getIndex(workList,workId)].AddToDo(toDo)
    }
    //must edit the toDo data in that work
    const editToDoInWork=(workId,toDoId)=>{}
    //must remove a todo from a work in the worklist
    const DeleteToDoInWork=(workId, toDoId)=>{
        return workList[getIndex(workList,workId)].removeToDo(toDoId)

    }
    //must move a todo from workA to workB in the work list
    const MoveToDoInWork=(sourceWorkId,DestinyWorkId,toDoId)=>{
        AddToDoInWork(DestinyWorkId,
            DeleteToDoInWork(sourceWorkId,toDoId))

    }





    return {}


}