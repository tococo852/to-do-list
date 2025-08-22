//takes a work objects and turns it into an element
const makeWorkElement = (work) => {
  let workEle = document.createElement("div");
  workEle.classList.add("workDisplay");

  let workName = document.createElement("div");
  workName.classList.add("workName");
  workName.setAttribute("data-id", work.getId());
  workName.innerText = work.getName();

  workEle.appendChild(workName);

  let toDoListEle= document.createElement('ul')



  //make a list object and append the toDos to that
  work.getToDosList().map((toDo) => {
    //make an element for the toDO and append it to work ele
    let toDoEle= document.createElement('li')
    toDoEle.innerText=toDo.getData().title
    toDoListEle.appendChild(toDoEle)
  });

  workEle.appendChild(toDoListEle)
  return workEle
};
//grabs all works from proyects and creates a list of elements
//using the makeworkelements function
const makeSidebarElements = (proyect) => {
  let elementList = [];
  proyect.getData().workList.map(
    work=>{
      console.log(work)
      elementList.push(makeWorkElement(work))
    }
  )
  return elementList;
};
//takes all the created elements and adds them to the sidebar
const displaySidebar = (proyect) => {
  let elementList = makeSidebarElements(proyect);
  let sidebar=document.querySelector('.sidebar')
  elementList.map(child=>{
    sidebar.appendChild(child)
  })
};

export { displaySidebar };
