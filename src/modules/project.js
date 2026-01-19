import Todo from "./todo.js"

export default class Project {
    constructor(name){
        this.name = name
    }

    addTodo(title, description, dueDate, priority) {
        return new Todo(title, description, dueDate, priority)
    }
}