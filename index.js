
// var items = document.querySelectorAll("li");
// for(let i=0; i<items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4";
// }
// items[1].style.backgroundColor = "green";

// var item = document.querySelector(".list-group-item:last-child");
//   item.style.color="white";



let ItemList = document.querySelector("#items");
// console.log(ItemList);

//parentNode
// console.log(ItemList.parentNode);
// ItemList.parentNode.style.backgroundColor ="#f4f4f4";
// console.log(ItemList.parentNode.parentNode);



//parentElement
// console.log(ItemList.parentElement);
// ItemList.parentElement.style.backgroundColor ="#f4f4f4";
// console.log(ItemList.parentElement.parentElement);


// childNodes
// console.log(ItemList.childNodes);
// console.log(ItemList.children);
// console.log(ItemList.children[1]);
// ItemList.children[1].textContent = "belal";


// Firstchild
// console.log(ItemList.firstChild);
// firstElemnetchild
// console.log(ItemList.firstElementChild);


// lastchilid
// console.log(ItemList.lastChild);
// console.log(ItemList.lastElementChild);



// nextSibling
// console.log(ItemList.nextSibling);
// nextElementSibling
// console.log(ItemList.nextElementSibling);


// previousSibling
// console.log(ItemList.previousSibling);
// previousElementSibling
// console.log(ItemList.previousElementSibling)
// ItemList.previousElementSibling.style.color ="green";



// createElement

// creat a div
let Newdiv = document.createElement("div");
// console.log(Newdiv);

// Add a class
Newdiv.className = "hellow";
// console.log(Newdiv)

// //Add id
Newdiv.id = "hell";
// console.log(Newdiv)

//Add attribute
Newdiv.setAttribute("Tittle","Helloe_guys");
// console.log(Newdiv);

//Creat text node
let NewDivText = document.createTextNode("Hollo word");

// Add text to div
Newdiv.append(NewDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

// console.log(Newdiv)
// Newdiv.style.fontSize = "30px";

container.insertBefore(Newdiv,h1);