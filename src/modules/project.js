import Todo from "./todo.js"

export default class Project {
    constructor(name){
        this.name = name;
        this.todolist = [];
    }

    addTodo(title, description, dueDate, priority) {
        const newtodo = new Todo(title, description, dueDate, priority);
        this.todolist.push(newtodo);
    }
}
