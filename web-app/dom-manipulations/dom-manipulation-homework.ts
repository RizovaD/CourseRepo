//  Create TypeScript file and add following Dom Manipulations

// 1.Change the text of the h1 tag.
const title: HTMLElement | null = document.getElementById("title");
if (title) {
  title.textContent = "Test ...";
}

//2.Change the color of the paragraph inside div.content.
const paragraph = document.querySelector(".content p") as HTMLElement;
if (paragraph) {
  paragraph.style.color = "blue";
}

//3.Change the list items textContent for example to be list of fruits.
const fruits1: string[] = ["Apple", "Banana", "Cherry"];
const li: NodeListOf<HTMLLIElement> = document.querySelectorAll('#list li');
if (li.length > 0) {
  (li[0] as HTMLElement).textContent = fruits1[0];
  (li[1] as HTMLElement).textContent = fruits1[1];
  (li[2] as HTMLElement).textContent = fruits1[2];
}

//4.Add a button and apply border style "1px solid red" to it. -->
const button = document.createElement("button");
button.textContent = "Click Me";
button.style.border = "1px solid red";
document.body.appendChild(button);
