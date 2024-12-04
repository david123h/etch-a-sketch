
function addSqueres(givenNumber) {
  for (let i = 0; i < givenNumber ** 2; i++) {
    const box = document.getElementById(`container`);

const squre = document.createElement(`div`);
squre.classList.add(`squre`);
    box.appendChild(squre);
  }
}

addSqueres(8);
