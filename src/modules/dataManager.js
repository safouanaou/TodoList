import Todo from "./todo"
import Project from "./project";

export let projects = [];
export let todos = [];

export const newTodo = (title, description, dueDate, priority) => {
        const newtodo = new Todo(title, crypto.randomUUID(), description, dueDate, priority);
        todos.push(newtodo);
    }

    export const newProject = (name) => {
        const newproj = new Project(name, crypto.randomUUID());
        projects.push(newproj);
    }