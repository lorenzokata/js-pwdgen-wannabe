var nome;
var cognome;
var colore;
var password;

nome = prompt('Inserisci il tuo nome');

cognome = prompt('Inserirci il tuo cognome');

colore = prompt('Inserisci il tuo colore preferito');

password = nome+cognome+colore+'21';

document.getElementById('password').innerHTML = password;