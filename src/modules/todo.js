export default class Todo {
    constructor(title, description, dueDate, priority, done = false){
        if (title === undefined){
            throw new Erorr("'name' is required")
        }

        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.done = done
    }
}