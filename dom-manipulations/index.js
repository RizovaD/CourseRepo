var bodyE1 = document.body;
bodyE1.style.backgroundColor = "#000";
bodyE1.style.color = "#fff";
bodyE1.style.border = "2px solid";
console.log("background", bodyE1.style.backgroundColor);
//getElementsByTagName
//............................................................................................................
//const divElements = document.getElementsByTagName("div")
//console.log("divElements", divElements)
var divElements = document.getElementsByTagName("div");
var btn = document.getElementsByTagName("button")[0];
// btn[0].style.backgroundColor = "green";
// btn[0].textContent = "About me"
var headingTwo = document.getElementsByTagName("h2");
var paragrhafs = document.getElementsByTagName("p");
console.log("divElements", divElements);
//getElementsByID
//....................................................................................................................
var shops = document.getElementById("shops");
//getElementsByClass
//....................................................................................................................
var items = document.getElementsByClassName("list-item");
var secondItem = document.getElementsByClassName("list-item")[1];
secondItem.textContent = "Second Element";
console.log("items", secondItem);
//querySelector()
//....................................................................................................................
var selectedH2 = document.querySelector("h2");
// if (selectedH2){
//   selectedH2.style.color = "blue"
// }
console.log("selectedH2", selectedH2);
var aboutUsBtn = document.querySelector(".about button");
console.log("aboutUsBtn", aboutUsBtn);
