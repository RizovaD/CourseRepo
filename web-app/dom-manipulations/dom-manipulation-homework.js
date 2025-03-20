//  Create TypeScript file and add following Dom Manipulations
// 1.Change the text of the h1 tag.
var title = document.getElementById("title");
if (title) {
    title.textContent = "Test ...";
}
//2.Change the color of the paragraph inside div.content.
var paragraph = document.querySelector(".content p");
if (paragraph) {
    paragraph.style.color = "blue";
}
//3.Change the list items textContent for example to be list of fruits.
var fruits1 = ["Apple", "Banana", "Cherry"];
var li = document.querySelectorAll('#list li');
if (li.length > 0) {
    li[0].textContent = fruits1[0];
    li[1].textContent = fruits1[1];
    li[2].textContent = fruits1[2];
}
//4.Add a button and apply border style "1px solid red" to it. -->
var button = document.createElement("button");
button.textContent = "Click Me";
button.style.border = "1px solid red";
document.body.appendChild(button);
