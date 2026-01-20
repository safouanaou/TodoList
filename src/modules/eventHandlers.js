import { showTodoForm, AddProject, todoDialog, addTodoForm, cancelBtn } from "./displayController";


export const showForm = showTodoForm.addEventListener('click', ()=>{
    todoDialog.showModal();
})

addTodoForm.addEventListener('submit', (e)=>{
    
})