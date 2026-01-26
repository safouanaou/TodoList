import Todo from "./todo";
import Project from "./project";
import { todos } from "./dataManager";

export const showTodoForm = document.getElementById('showTodoForm');
export const projectList = document.getElementById('projects-list');
export const AddProject = document.getElementById('newProjectBtn');
export const todoDialog = document.getElementById('todoDialog');
export const addTodoForm = document.getElementById('addTodoForm');
export const cancelBtn = document.getElementById('cancelBtn');
export const todoList = document.getElementById('todo-list');


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
        let todoContainer = document.createElement("div");
        todoContainer.className = "todoContainer";
        
        todoContainer.innerHTML = `
            <input type="radio" data-index=${index} class="doneBtn">
            <label>${todo.title}</label>
        `;

        todoList.appendChild(todoContainer)
    })


    

    
 
}
