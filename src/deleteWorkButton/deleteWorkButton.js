import { displaySidebar } from "../sideBarElement/sidebarListDisplay"
import { loadProyect } from "../storageManager/storage"
import { saveProyect } from "../storageManager/storage"
import { displayWork } from "../displayWorkElement/displayWorkElement"
const runDelete=(e)=>{
if (e.target.matches('button') && e.target.matches('.sidebarDelete')) {
    let target=e.target.closest('.workSidebarName')
    let proyect= loadProyect()
    let workId=parseInt(target.dataset.id)
    proyect.DeleteWork(workId)
    saveProyect(proyect)
    displaySidebar()
    //edgecases

    //deleted currently displayed work

    //deleted last work

    let currDisplay=parseInt(
        document.querySelector('.header').dataset.id
    )
    console.log(currDisplay)
    if (currDisplay==workId) {
        console.log('deleted current work, displaying first')
        displayWork(proyect.getData().workList[0])
    }


}
 
}



export {runDelete}