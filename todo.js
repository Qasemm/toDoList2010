unction listItem() {
   let list = document.createElement("li");
   let textlist = document.getElementById("txt").value;
   let ul = document.getElementById("ulli");
   list.appendChild(document.createTextNode(textlist));
   ul.appendChild(list);
   document.getElementById("txt").value = "";
