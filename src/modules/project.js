import Todo from "./todo.js"

export default class Project {
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    addTodo(title, description, dueDate, priority) {
        const newtodo = new Todo(title, crypto.randomUUID(), description, dueDate, priority);
        this.todolist.push(newtodo);
    }
}
