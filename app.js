// Mail

// Chiedi all'utente la sua email
const email = prompt('Inserisci la tua email?');
console.log(email);

// Controlla che sia nella lista di chi puó accedere
const listEmail = [
  'catana.ion17@yahoo.it',
  'pippo2@gmail.com',
  'vscode.4@mail.ru',
  'slack.34@gmail.com',
  'zoom.25@mail.ru',
];
console.log(listEmail);

// Stampa un messagio apropriato sull'esito del controllo
let check = false;
for (let i = 0; i < listEmail.length; i++) {
  console.log(listEmail[i]);
  const element = listEmail[i];
  if (element === email) check = true;
}
if (check === true) alert('Ben tornato');
else alert('Non sei abilitato');

// Gioco dei Dadi
const launchDadi = document.getElementById('launch');
let resultHuman = document.getElementById('result_human');
let resultComputer = document.getElementById('result_computer');
let numberHuman = 0;
let numberComputer = 0;

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
numberHuman = Math.floor(Math.random() * 6) + 1;
numberComputer = Math.floor(Math.random() * 6) + 1;
console.log(numberHuman, numberComputer);
if (numberHuman > numberComputer) {
  alert('You Won');
  resultHuman.append('You Won');
  resultComputer.append('You Lost');
} else if (numberHuman === numberComputer) {
  alert('Equal');
  resultHuman.append('Equal');
  resultComputer.append('Equal');
} else {
  alert('You Lost');
  resultHuman.append('You Lost');
  resultComputer.append('You Won');
}

// Stabilire il vincitore, in base a chi fa il punteggio piú alto
