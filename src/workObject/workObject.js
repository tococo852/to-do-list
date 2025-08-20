const createWork = ({ id, name, toDoList }) => {
  let proyectName = name;
  let _id = id;
  let toDos = toDoList;
  const changeName = (newName) => {
    proyectName = newName;
  };
  const getName = () => {
    return proyectName;
  };
  const getToDosList = () => {
    return toDos;
  };
  const getId = () => {
    return _id;
  };
  const addTodo = (toDo) => {
    toDos.push(toDo);
  };
  const getIndex = (list, id) => {
    let index = list.findIndex((obj) => obj.getId() === id);
    if (index >= 0) {
      return index;
    }
    return null;
  };

  //change to splice instead of filter to avoid deleting the reference
  const removeToDo = (toDoId) => {
    return toDos.splice(getIndex(toDos, toDoId), 1);
  };
  //it must fint
  const getToDoById = (toDoId) => {
    return toDos[getIndex(toDos, toDoId)];
  };
  const getData = () => {
    return {
      name: proyectName,
      id: _id,
      toDoList: toDos,
    };
  };
  return {
    getData,
    changeName,
    getName,
    getToDosList,
    addTodo,
    removeToDo,
    getId,
    getToDoById,
  };
};
export { createWork };
