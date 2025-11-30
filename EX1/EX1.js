// Exercice 1 — Détection du type d'une variable
// Déclarez les variables suivantes :
let x = "150";
let y = 150;
let z = true;

const output = document.getElementById('output');


const line1 = `x = ${x} -> type: ${typeof x}`;
const p1 = document.createElement('p');
p1.textContent = line1;
output.appendChild(p1);
console.log(line1);

const line2 = `y = ${y} -> type: ${typeof y}`;
const p2 = document.createElement('p');
p2.textContent = line2;
output.appendChild(p2);
console.log(line2);

const line3 = `z = ${z} -> type: ${typeof z}`;
const p3 = document.createElement('p');
p3.textContent = line3;
output.appendChild(p3);
console.log(line3);


x = Number(x);
const line4 = `Après conversion : x = ${x} -> type: ${typeof x}`;
const p4 = document.createElement('p');
p4.textContent = line4;
output.appendChild(p4);
console.log(line4);


const explanation = 'Explication : JavaScript utilise un typage dynamique — une variable peut contenir des valeurs de différents types au cours du programme. Ici on a converti la chaîne "150" en nombre avec Number().';
const p5 = document.createElement('p');
p5.textContent = explanation;
output.appendChild(p5);
console.log(explanation);


