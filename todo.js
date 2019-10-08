let todos = [];

document.getElementById("txt").addEventListener("input", function() {
    document.getElementById("plus").style.visibility = "visible";
});

function addTodo(text) {
    todos.push({
        text: text,
        isCompleted: false

    });
}

function renderTodos(todos) {
    const html = todos.map((todo, index) => {
        const circleFileName = todo.isCompleted ? 'check.png' : 'circle.png';

        return '<div class="todo">' +
            '<img class="cl" src="' + circleFileName + '" data-id="' + index + '" onClick="toggleCheck(event) + strikeIt() ">' +
            '<span id="span-txt">' + todo.text + '</span>' +
            '<img class="clo" src="cancel-24px.png" data-id="' + index + '" onClick="deleteTodo(event)">' +
            '</div>';
    });

    document.getElementById('todos').innerHTML = html.join('');
    document.getElementById("count").innerHTML = todos.length;
    document.getElementById("txt").value = "";
    document.getElementById("plus").style.visibility = "hidden";
}
document.getElementById("txt").addEventListener("keypress", function(ent) {
    if (ent.keyCode === 13) {
        const text = document.getElementById("txt").value;
        if (text === '') {
            return;
        }
        addTodo(text);

        renderTodos(todos);
    }
});
document.getElementById("plus").addEventListener("click", function() {
    const text = document.getElementById("txt").value;

    if (text === '') {
        return;
    }
    addTodo(text);
    renderTodos(todos);
});

function toggleCheck(event) {
    const index = event.target.getAttribute('data-id');
    todos[index].isCompleted = !todos[index].isCompleted;

    renderTodos(todos);
}

function deleteTodo(event) {
    const index = event.target.getAttribute('data-id');
    todos.splice(index, 1);
    renderTodos(todos);
};

function clearChecked(list) {
    todos = list.filter(todo => !todo.isCompleted);

    renderTodos(todos);
};
document.getElementById("todos").addEventListener("click", function() {
    const text = document.getElementById("txt").value;
});

function strikeIt(todos) {
    if (iscompleted = true) {
        el = document.querySelector('#span-txt');
        el.style.setProperty('text-decoration', 'line-through');
    } else {
        todos.style.setProperty('text-decoration', 'none');
        enderTodos(todo);
    }
};