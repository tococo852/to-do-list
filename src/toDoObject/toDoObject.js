//To Do object
/*
to do expects to recive all the inputs as strings, and will edit them to proper values inside
string title, the title of the to do
string desc, description of the to do
date dueDate, the date in which the to do is due to
int prio, is an integer from 0 to 3 to represent how pressing the to do is, should be incrementable and loop back to 0 if it is tried to make bigger than 3
bool checklist, is a boolean for the checklist representancion, false for checked out, true for checked in

change functions, they do what u expect them to do except for changeprio and changeCheckList, details below
changePrio, prio on this app only increases up to 3, then resets to 0, change prio just simulates this by increase current prio by 1, and resetting to 0 if higher than 3
changeCheckList, is a boolean true or false for a checkbox, it will swap its value to the opossite boolean on use

getData gives A COPY of the data the object has, to change object values, please refer to change functions
*/
const createToDo=(id,title, description, dueDate, priority, checklist)=>{
    let _data={id,title,description,dueDate,priority,checklist}

    const changeTitle=(newTitle)=>{_data.title=newTitle}
    const changeDescription=(newDescription)=>{_data.desc=newDescription}
    const changeDueDate=(newDueDate)=>{_data.dueDate=newDueDate}
    const changePrio=()=>{
        _data.priority++
        console.log(_data.priority)
        if (_data.priority>3){_data.priority=0}


    }
    const changeCheckList=()=>{
        _data.checklist= _data.checklist!=true
    }

    const getId=()=>{return _data.id}
    const getData=()=>{
        return {..._data}
    }
    const displayData=()=>{
        console.log(_data)
    }
    return {changeTitle,changeDescription,changeDueDate,changePrio,changeCheckList,getData,getId,displayData}
}

export {createToDo};