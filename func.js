const box = document.getElementById(`container`);

function addSqueres(givenNumber) {
  for (let i = 0; i < givenNumber ** 2; i++) {
    // Calculate the box width
    const cubeWidthAndHeight = 550 / givenNumber;

    const squre = document.createElement(`div`);
    squre.classList.add(`squre`);
    squre.style.height = `${cubeWidthAndHeight}px`;
    squre.style.width = `${cubeWidthAndHeight}px`;
    box.appendChild(squre);

    squre.addEventListener(`mouseover`, () => {
      squre.style.backgroundColor = `black`;
    });
  }
}

addSqueres(50);

const resetButton = document.getElementById(`reset`);

resetButton.addEventListener(`click`, () => {
  const allsqueres = box.children;
  for (let squre of allsqueres) {
    squre.style.backgroundColor = `white`;
  } 
});
