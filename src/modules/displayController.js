import Todo from "./todo";
import Project from "./project";
import { todos, projects } from "./dataManager";

export const showTodoForm = document.getElementById('showTodoForm');
export const AddProject = document.getElementById('newProjectBtn');
export const todoDialog = document.getElementById('todoDialog');
export const addTodoForm = document.getElementById('addTodoForm');
export const cancelBtn = document.getElementById('cancelBtn');
export const todoList = document.getElementById('todo-list');
export const projectList = document.getElementById('projects-list');
export const formProjectList = document.getElementById('formProject');
export const menuTrigger = document.getElementById('menu-trigger');
export const projectMenu = document.querySelector('.FormProjectMenu');


export const getFormData = () => {

    return {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        dueDate: document.getElementById('dueDate').value,
    }

}


export const displayTodos = () => {
    todoList.innerHTML = ``;

    todos.forEach((todo, index)=>{
        if(todo.project ){

        }
        let todoContainer = document.createElement("div");
        todoContainer.className = "todoContainer";
        
        todoContainer.innerHTML = `
            <input type="radio" data-index=${index} class="doneBtn">
            <label>${todo.title}</label>
        `;

        todoList.appendChild(todoContainer);
    })
}

export const displayProjects = ()=>{
    projectList.innerHTML = ``;

    projects.forEach((project, index)=>{
        projectList.innerHTML = `
            <li data-index=${index}><span class="material-symbols-outlined">lists</span>${project.name}</li>
        `;
    })
    
}

export const renderFormProject = () => {
    projects.forEach((proj)=>{
        formProjectList.innerHTML = `
            <li>${proj.name}</li>
            <li>dkdkdk</li>
        `;
    })
}
