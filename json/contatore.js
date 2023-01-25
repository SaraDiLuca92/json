//assegno il valore al contatore trasformando la stringa in numero
//prendendo l'elemento creato in sessionStorage con getItem
let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

//2 creo costante e assegno al paragagrafo il valore del contatore
const assignCounterToDOM = function () {
  paragraph.innerText = counterValue;
};

//1 seleziono elemento paragrafo
const paragraph = document.getElementById("counter");

//3 richiamo la funzione
assignCounterToDOM();
//4 creo una funzione che incrementa il valore del contatore
const increaseCounter = function () {
  counterValue = counterValue + 1;

  console.log(counterValue);
  //5 richiamo di nuovo la funzione per riassegnare al paragrafo il valore di prima
  // incrementato
  assignCounterToDOM();
  //6 creo il salvataggio dell'ultimo valore del contatore nel session storage
  //quindi nella memoria a breve termine, che si cancella se chiudo la pagina,
  //ma rimane se la aggiorno semplicemente
  sessionStorage.setItem("lastCounterValue", counterValue);
};
//7 il setInterval ripete ad oltranza la funzione increaseCounter ogni volta che
//aggiorno la pagina(window) dopo 1 solo secondo.
window.setInterval(increaseCounter, 1000);
