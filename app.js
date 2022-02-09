// Mail

// Chiedi all'utente la sua email
const email = prompt('Qualle é la tua email?');
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
  if (element === email)
    check = true;
}
if (check === true)
  alert('Ben tornato');
else
  alert('Non sei abilitato');
// Gioco dei Dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio piú alto
