document.getElementById("txt").addEventListener("input", function() {
    document.getElementById("plus").style.visibility = "visible";
});

function listItem() {
    let list = document.createElement("li");
    let textlist = document.getElementById("txt").value;
    let ul = document.getElementById("ulli");
    list.appendChild(document.createTextNode(textlist));
    ul.appendChild(list);
    document.getElementById("txt").value = "";
    document.getElementById("cont").style.display = "block";

    var liList = document.getElementById("ulli").getElementsByTagName("li");
    document.getElementById("count").innerHTML = liList.length;

    list.onclick = removeItem;

    function removeItem(del) {
        del.target.parentElement.removeChild(del.target);
    }
}

document.getElementById("txt").addEventListener("keypress", function(ent) {
    (ent.keyCode === 13 ? listItem() : "")
    document.getElementById("plus").style.visibility = "hidden";
});

document.getElementById("plus").addEventListener("click", function() {
    (document.getElementById("txt").value ? listItem() : "")
    document.getElementById("plus").style.visibility = "hidden";

});