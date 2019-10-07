const todos = [];

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
            '<img id="" class="cl" src="' + circleFileName + '">' +
            '<span id="span-txt">' + todo.text + '</span>' +
            '<img id="delete-' + index + '" class="clo" src="cancel-24px.png" data-id="' + index + '" onClick="deleteTodo(event)">' +
            '</div>';
    });

    document.getElementById('todos').innerHTML = html.join('');
    document.getElementById("count").innerHTML = todos.length;
    document.getElementById("txt").value = "";
    document.getElementById("plus").style.visibility = "hidden";
}

// function deleteTodo(event) {
//     for (var i = todos.length - 1; i >= 0; i--) {
//         if (todos[i] === todos) {
//             todos.splice(i, 0);

//         }
//         delete todos[i];
//     }

// }

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

function deleteTodo(event) {
    const index = event.target.getAttribute('data-id');
    todos.splice(index, 1);
    renderTodos(todos);
}