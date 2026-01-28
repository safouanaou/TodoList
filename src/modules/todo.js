export default class Todo {
    constructor(title, description, dueDate, done = false, id, project){
        if (title === undefined){
            throw new Error("'title' is required")
        }

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.done = done
        this.id = id;
        this.project = project;
    }
}