const box = document.getElementById(`container`);

// adding squares into the cotainers
function addSqueres(givenNumber) {

  // Calculate the squre width and height
  const cubeWidthAndHeight = 550 / givenNumber;

  for (let i = 0; i < givenNumber ** 2; i++) {
//adding squre to the DOM in each iteration
    const squre = document.createElement(`div`);
    squre.classList.add(`squre`);
    squre.style.height = `${cubeWidthAndHeight}px`;
    squre.style.width = `${cubeWidthAndHeight}px`;
    box.appendChild(squre);
// paint the square when the mouse is hover on it
    squre.addEventListener(`mouseover`, () => {
        if (currentColor === `colorful`)
      {squre.style.backgroundColor = getRandomColor()
      }else {
        squre.style.backgroundColor = `black`;
      };
    });
  }
}

addSqueres(10);

//catching buttons
const resetButton = document.getElementById(`reset`);
const blackButton = document.getElementById(`black`)
const sizeButton = document.getElementById(`size`)
const colorfulButton = document.getElementById(`colorful`)

//for the first time the color is black
let currentColor = `black`

//Event listeners for the buttons
colorfulButton.addEventListener(`click`, () =>
currentColor = `colorful`)

blackButton.addEventListener(`click`, () =>
currentColor = `black`)

resetButton.addEventListener(`click`, () => {
  const allsqueres = box.children;
  for (let squre of allsqueres) {
    squre.style.backgroundColor = `white`;
  } 
});

//return random color function 
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Random red value (0-255)
  const g = Math.floor(Math.random() * 256); // Random green value (0-255)
  const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
  return `rgb(${r}, ${g}, ${b})`; // Return the RGB color as a string
}
