// click event
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "blue";
    });
});