var arrBombe = [];
var arrUtente = [];
var valoreUtente = 0;
var punteggio = 0;

var scelta_diff = parseInt(prompt("Inserisci la difficolta: 0, 1, 2"));
switch (scelta_diff){
  case 0:
    arrBombe = calcolo_bombe( 100, 1);
    console.log(arrBombe);
    calcolo_vittorie( 100, 1, arrBombe);
    break;

  case 1:
    arrBombe = calcolo_bombe( 80, 1);
    console.log(arrBombe);
    arrUtente = calcolo_vittorie( 80, 1, arrBombe);
    break;

  case 2:
    arrBombe = calcolo_bombe( 50, 1);
    arrUtente = calcolo_vittorie( 50, 1, arrBombe);
    break;

  // case   2:
  //   alert("Riavvia partita la difficolta inserita non é valida")
  //   break  
  
  
  }

console.log(arrBombe)



// Creo una funzione inserire, con un ciclo, for in maniera randomica 16 numeri da 1 a 100 in un array al computer.
function calcolo_bombe( max, min){
  var i = 1;
  var valoreRandom = 0;
  var arrRandom = [];
  while(i <= 16 ){
    valoreRandom = Math.floor(Math.random() * (max - min)) + min;
    // Controllo con un if se il valore estratto é gia stato salvato in precedenza. 
    if(arrRandom.includes(valoreRandom)){
      // Se é un duplicato di un valore estratto in precedenza non incremento "i".
    }else{
      // Se non é un duplicato lo pusho nell'array delle bombe e incremento la "i".
      arrRandom.push(valoreRandom);
      i++; 
    }
  }return arrRandom;
 }

// Creo una funzione per far inserire all'utente i numeri su cui faccio i controlli dovuti.
 function calcolo_vittorie( max, min, arrRandom){

  // Inizializzo un contatore per il punteggio e un flag per uscire dal ciclo.
  var flag = false;
  var counter = 0;
  var arrGiocatore = [];
  var valoreUtente = 0;
  // Apro un ciclo che ci chiude quando finisce la partita.
  while(flag == false ){
    valoreUtente = parseInt(prompt("Inserisci un numero da " + min + " a " + max));
    
    // Controlli del numero inserito
    if(valoreUtente <= min || valoreUtente >= max){
      alert("Il numero inserito non rispetta i canoni.")
    }else if(arrGiocatore.includes(valoreUtente)){
      alert("Il numero scelto é gia stato inserito.")
    }else if(isNaN(valoreUtente) === true){
      alert("Il numero inserito non é un numero.")
    }else if(arrRandom.includes(valoreUtente)){
      flag = true;
      console.log("Hai trovato la bomba hai perso")
    }else{
      arrGiocatore.push(valoreUtente);
      console.log(arrGiocatore)
      
      counter ++;
    }
  }
  console.log("Il tuo punteggio é: " + counter);
}
