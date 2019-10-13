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
        let strikeThrough = '';
        let circleFileName = 'circle2.png';

        if (todo.isCompleted) {
            strikeThrough = 'strike-through';
            circleFileName = 'check-mark.png';
        }

        return '<div class="todo">' +
            '<img class="cl" src="' + circleFileName + '" data-id="' + index + '" onClick="toggleCheck(event)">' +
            '<span id="span-txt" class="' + strikeThrough + '">' + todo.text + '</span>' +
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
            return ;
        }
        addTodo(text);
        renderTodos(todos);
        document.getElementById("cont").style.display = "block";
    }
});
document.getElementById("plus").addEventListener("click", function() {
    const text = document.getElementById("txt").value;

    if (text === '') {
        return;
    }
    addTodo(text);
    renderTodos(todos);
    document.getElementById("cont").style.display = "block";
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