const bodyE1: HTMLElement = document.body;
bodyE1.style.backgroundColor = "#000";
bodyE1.style.color = "#fff"
bodyE1.style.border = "2px solid"

console.log("background", bodyE1.style.backgroundColor)

//getElementsByTagName
//............................................................................................................

//const divElements = document.getElementsByTagName("div")
//console.log("divElements", divElements)

const divElements: HTMLCollectionOf<HTMLElement> = 
document.getElementsByTagName("div");

const btn: HTMLButtonElement = 
document.getElementsByTagName("button")[0];

// btn[0].style.backgroundColor = "green";
// btn[0].textContent = "About me"

const headingTwo: HTMLCollectionOf<HTMLHeadingElement> = 
document.getElementsByTagName("h2")

const paragrhafs: HTMLCollectionOf<HTMLParagraphElement> = 
document.getElementsByTagName("p")


console.log("divElements", divElements);

//getElementsByID
//....................................................................................................................

const shops: HTMLElement | null = document.getElementById("shops")

//getElementsByClass
//....................................................................................................................

const items: HTMLCollectionOf<Element> = document.getElementsByClassName("list-item");

const secondItem: Element = document.getElementsByClassName("list-item")[1];

secondItem.textContent = "Second Element";

console.log("items", secondItem);

//querySelector()
//....................................................................................................................

const selectedH2 = document.querySelector("h2") as HTMLHeadingElement;

// if (selectedH2){
//   selectedH2.style.color = "blue"
// }

console.log("selectedH2", selectedH2);


const aboutUsBtn = document.querySelector(".about button") as HTMLButtonElement;

console.log("aboutUsBtn", aboutUsBtn);

