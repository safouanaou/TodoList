export default class Todo {
    constructor(title, description, dueDate, priority, done = false){
        if (title === undefined){
            throw new Error("'title' is required")
        }

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done
    }

    toggleDone(){
        this.done = !this.done;
    }
}