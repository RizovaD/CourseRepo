// get element by tag name
document.getElementsByTagName("h1")[0]

// get h1 tag by css selector
document.querySelector("h1")
document.querySelector("#list") //selecting id

// method createElement - create DOM Element
// get element by class name
const addItemsContent: HTMLCollectionOf<Element> = document. getElementsByClassName ("add-items")
//console.log("addItems", addItemsConten)
const paragraph1: HTMLParagraphElement = document.createElement("p");
paragraph1.textContent = "Heloo Donika :)"; 

// append element in the html structure
addItemsContent[0].append(paragraph1);

// delete element Method remove()
//paragraph1.remove();

const spanE1: HTMLSpanElement = document.getElementsByTagName("span")[0]
spanE1.remove();

//event listener - on keboard press
document.addEventListener("keypress", (event: KeyboardEvent) => {
console.log("key pressed", event.key)
})

// Add and removed list itame

// !!!!when receive error that can be null move the type on the end

const itemImput = document.querySelector("#itemInput") as HTMLInputElement;
const addButton = document.querySelector("#addButton") as HTMLButtonElement;
const list = document.querySelector("#list") as HTMLUListElement;



function addListItem(){
  const listItem: HTMLLIElement = document.createElement("li");
  //console.log(itemImput.value);
  const listItemValue: string | number = itemImput.value;

  if(listItemValue !== "" && listItemValue !== " "){  
//add input value as list item text
    listItem.textContent = listItemValue;
// display list item on the screen
    list.append(listItem);
  

// clear input value after adding it to the list 
  itemImput.value = "";
  itemImput.focus();

  const deleteBtn: HTMLButtonElement = document.createElement("button");
  deleteBtn.textContent = "Delete";
  listItem.append(deleteBtn);

  deleteBtn.style.margin = "5px";

  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  })
}
}

addButton.addEventListener("click", () => addListItem())

itemImput.addEventListener("keypress", (event) => {
      if (event.key === 'Enter'){
        addListItem()
      }


}
);