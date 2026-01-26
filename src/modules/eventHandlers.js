import { showTodoForm, AddProject, 
         todoDialog, addTodoForm, cancelBtn,
         todoTitle, todoDescription, todoDueDate,
         getFormData, todoList,
         displayTodos
} from "./displayController";

import { newTodo, newProject, done, todos } from "./dataManager";


todoList.addEventListener('click', (e) => {
    if(e.target.classList.contains('doneBtn')){
        const index = e.target.dataset.index;
        done(index);
        displayTodos();
    }
})

export const showForm = showTodoForm.addEventListener('click', ()=>{
    todoDialog.showModal();
})

export const openForm = addTodoForm.addEventListener('submit', (e)=>{
    
    const currentValue = getFormData();


    e.preventDefault();

    newTodo(currentValue.title, currentValue.description, currentValue.dueDate);
    displayTodos()
    console.log(todos)


    todoDialog.close();
    addTodoForm.reset();
    

})