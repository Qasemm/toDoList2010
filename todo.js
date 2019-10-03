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
    const html = todos.map(todo => {
        const circleFileName = todo.isCompleted ? 'check_circle_outline.png' : 'fiber_manual_record-24px.png';
        return '<div class="todo">' +
            '<img id="clo" class="clo" src="' + circleFileName + '">' +
            '<span>' + todo.text + '</span>' +
            '<img id="clo" class="clo" src="cancel-24px.png">' +
            '</div>';
    });

    document.getElementById('todos').innerHTML = html.join('');
}

document.getElementById("txt").addEventListener("keypress", function(ent) {
    if (ent.keyCode === 13) {
        addTodo(
            document.getElementById("txt").value
        );

        renderTodos(todos);
    }

    document.getElementById("plus").style.visibility = "hidden";
});

document.getElementById("plus").addEventListener("click", function() {
    (document.getElementById("txt").value ? addTodo() : "")
    document.getElementById("plus").style.visibility = "hidden";

});