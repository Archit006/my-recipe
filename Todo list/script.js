document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
