// Creating the container div
const div = document.createElement("div");
div.setAttribute("id", "gridContainer");

// Creating a test child
const testChild = document.createElement("p");
testChild.classList.add("textChild");
testChild.textContent = "testing";

div.appendChild(testChild);
document.body.appendChild(div);

// Create 16x16 grid
let counter = 0
while (counter < 256){
const square = document.createElement("div");
div.appendChild(square);
counter = counter + 1;
}