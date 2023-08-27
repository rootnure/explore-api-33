const loadTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}

const displayTodos = todos => {
    // get the container
    const todosContainer = document.getElementById('todos-container');
    for(const todo of todos){
        const {id, userId, title, completed} = todo;
        // create the child element
        const todoDiv = document.createElement('div');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
            <h2>Title: ${title}</h2>
            <p>ID: ${id}</p>
            <p>User ID: ${userId}</p>
            <p>Is completed: ${completed? 'Yes' : 'Pending'}</p>
        `;
        todoDiv.classList.add('todo');
        todosContainer.appendChild(todoDiv);
    }
}

loadTodos();