// Exercice 6 — Somme des nombres pairs et impairs entre 1 et 50
let sommePairs = 0;
let sommeImpairs = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sommePairs += i;
  } else {
    sommeImpairs += i;
  }
}

const output = document.getElementById('output');
const p1 = document.createElement('p');
p1.textContent = `Somme des nombres pairs entre 1 et 50 : ${sommePairs}`;
output.appendChild(p1);
console.log(p1.textContent);

const p2 = document.createElement('p');
p2.textContent = `Somme des nombres impairs entre 1 et 50 : ${sommeImpairs}`;
output.appendChild(p2);
console.log(p2.textContent);
 