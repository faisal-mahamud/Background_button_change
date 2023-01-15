function generateHex() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")
    }`;
}

function changeButtonColor() {
    const buttonElement = document.querySelector("body");
    const newColor = generateHex();
    buttonElement.style.backgroundColor = newColor;
}
