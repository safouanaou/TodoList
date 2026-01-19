object: {
    title,
    description,
    dueDate,
    priority,
    done: false;
}

projects: {
    type: Array of objects.
    functions: {
        add-todo
    }

    default or,
    user set project (ex: school, work, home etc)
}

Add-todo: {
    input: title (required), description, dueDate, priority
    output: toDo object
}

