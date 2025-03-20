// get element by tag name
document.getElementsByTagName("h1")[0];
// get h1 tag by css selector
document.querySelector("h1");
document.querySelector("#list"); //selecting id
// method createElement - create DOM Element
// get element by class name
var addItemsContent = document.getElementsByClassName("add-items");
//console.log("addItems", addItemsConten)
var paragraph1 = document.createElement("p");
paragraph1.textContent = "Heloo Donika :)";
// append element in the html structure
addItemsContent[0].append(paragraph1);
// delete element Method remove()
//paragraph1.remove();
var spanE1 = document.getElementsByTagName("span")[0];
spanE1.remove();
//event listener - on keboard press
document.addEventListener("keypress", function (event) {
    console.log("key pressed", event.key);
});
// Add and removed list itame
// !!!!when receive error that can be null move the type on the end
var itemImput = document.querySelector("#itemInput");
var addButton = document.querySelector("#addButton");
var list = document.querySelector("#list");
function addListItem() {
    var listItem = document.createElement("li");
    //console.log(itemImput.value);
    var listItemValue = itemImput.value;
    if (listItemValue !== "" && listItemValue !== " ") {
        //add input value as list item text
        listItem.textContent = listItemValue;
        // display list item on the screen
        list.append(listItem);
        // clear input value after adding it to the list 
        itemImput.value = "";
        itemImput.focus();
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        listItem.append(deleteBtn);
        deleteBtn.style.margin = "5px";
        deleteBtn.addEventListener("click", function () {
            listItem.remove();
        });
    }
}
addButton.addEventListener("click", function () { return addListItem(); });
itemImput.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        addListItem();
    }
});
