const todos = [];

document.getElementById("txt").addEventListener("input", function () {
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
        const circleFileName = todo.isCompleted ? 'check.png' : 'circle.png';
        return '<div class="todo">' +
            '<img id="cl" class="cl" src="' + circleFileName + '">' +
            '<span id="span-txt">' + todo.text + '</span>' +
            '<img id="clo" class="clo" src="cancel-24px.png">' +
            '</div>';
    });

    document.getElementById('todos').innerHTML = html.join('');
    document.getElementById("count").innerHTML=todos.length;
    
}

document.getElementById("txt").addEventListener("keypress", function (ent) {
    if (ent.keyCode === 13) {
        addTodo(
            document.getElementById("txt").value
        );

        renderTodos(todos);
        document.getElementById("txt").value = "";
    }

    document.getElementById("plus").style.visibility = "hidden";

});

document.getElementById("plus").addEventListener("click", function () {
    (document.getElementById("txt").value ? addTodo(document.getElementById("txt").value) : "");
    renderTodos(todos);
    document.getElementById("plus").style.visibility = "hidden";

});

