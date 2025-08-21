//takes a work objects and turns it into an element
const makeWorkElement = (work) => {
  let workEle = document.createElement("div");
  workEle.classList.add("workDisplay");

  let workName = document.createElement("");
  workName.classList("workName");
  workName.setAttribute("data-id", work.getId());
  workName.innerText = work.getName();

  workEle.appendChild(workName);

  //make a list object and append the toDos to that
  work.getToDosList().map((toDo) => {
    //make an element for the toDO and append it to work ele
  });
};
//grabs all works from proyects and creates a list of elements
//using the makeworkelements function
const makeSidebarElements = (proyect) => {
  let elementList = [];
  return elementList;
};
//takes all the created elements and adds them to the sidebar
const displaySidebar = (proyect) => {
  let elementList = makeSidebarElements(proyect);
};

export { makeWorkElement, makeSidebarElements, displaySidebar };
