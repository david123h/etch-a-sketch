function addSqueres(givenNumber) {
  for (let i = 0; i < givenNumber ** 2; i++) {

    // Calculate the box width 
    const cubeWidthAndHeight = 550 / givenNumber ;

    const box = document.getElementById(`container`);

    const squre = document.createElement(`div`);
    squre.classList.add(`squre`);
    squre.style.height = `${cubeWidthAndHeight}px`
    squre.style.width = `${cubeWidthAndHeight}px`
    box.appendChild(squre);

    squre.addEventListener(`mouseover`, () =>
      {  squre.style.backgroundColor = `red`
      })
  }
}



addSqueres(200);
