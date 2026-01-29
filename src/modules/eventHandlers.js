import { showTodoForm, AddProject, 
         todoDialog, addTodoForm, cancelBtn,
         todoTitle, todoDescription, todoDueDate,
         getFormData, todoList,
         displayTodos, displayProjects, projectList,
         renderFormProject, menuTrigger,
        projectMenu,
        formProjectList
} from "./displayController";

export let currentProjectId = '';

import { newTodo, newProject, done, todos, projects } from "./dataManager";


todoList.addEventListener('click', (e) => {
    if(e.target.classList.contains('doneBtn')){
        const index = e.target.dataset.index;
        done(index);
        displayTodos();
    }
})

export const showForm = showTodoForm.addEventListener('click', ()=>{
    todoDialog.showModal();
    renderFormProject()
})

   formProjectList.addEventListener('click', (e)=>{
        const index = e.target.dataset.index;
        currentProjectId = projects[index].id
    })


export const openForm = addTodoForm.addEventListener('submit', (e)=>{
    
    const currentValue = getFormData();
 
    e.preventDefault();

    console.log(typeof(currentProjectId));
    newTodo(currentValue.title, currentValue.description, currentValue.dueDate, currentProjectId);
    displayTodos();
    console.log(todos)


    todoDialog.close();
    addTodoForm.reset();

})

cancelBtn.addEventListener('click', ()=>{
    todoDialog.close()
    addTodoForm.reset();
})

AddProject.addEventListener('click', ()=>{
    const userInput = prompt('Enter Project name');
    newProject(userInput);
    displayProjects();
    console.log(projects);
})


projectList.addEventListener('click', (e)=>{
    //understand this line in depth
    const index = e.target.dataset.index;

    //linkn project id with todo project name
})

menuTrigger.addEventListener('click', ()=>{
    projectMenu.classList.toggle('content-hidden');
})