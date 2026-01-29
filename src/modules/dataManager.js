import Todo from "./todo"
import Project from "./project";

export const projects = [];
export const todos = [];

export const newTodo = (title, description, dueDate, projectid = '') => {
        const newtodo = new Todo(title, description, dueDate, false, crypto.randomUUID(), projectid);
        todos.push(newtodo);
    }

export const newProject = (name) => {
        const newproj = new Project(name, crypto.randomUUID());
        projects.push(newproj);
        console.log('projects', projects)
    }

export const done = (index) => {
    todos.splice(index, 1);
}


