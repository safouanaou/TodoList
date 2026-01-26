import Todo from "./todo"
import Project from "./project";

export const projects = [];
export const todos = [];

export const newTodo = (title, description, dueDate) => {
        const newtodo = new Todo(title, description, dueDate, false, crypto.randomUUID());
        todos.push(newtodo);
    }

    export const newProject = (name) => {
        const newproj = new Project(name, crypto.randomUUID());
        projects.push(newproj);
    }

export const done = (index) => {
    todos.splice(index, 1);
}
