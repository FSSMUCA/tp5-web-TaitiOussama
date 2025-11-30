// Exercice 9 — Fonction récursive : calcul de la factorielle
const btn = document.getElementById('btn');
const nInput = document.getElementById('n');
const output = document.getElementById('output');

function factorielle(n) {
  if (n === 0) return 1;
  return n * factorielle(n - 1);
}

btn.addEventListener('click', function () {
  output.innerHTML = '';
  const n = Number(nInput.value);
  if (isNaN(n) || nInput.value === '' || n < 0 || !Number.isInteger(n)) {
    const p = document.createElement('p');
    p.textContent = 'Veuillez entrer un entier positif.';
    output.appendChild(p);
    return;
  }
  const result = factorielle(n);
  const p = document.createElement('p');
  p.textContent = `Factorielle de ${n} = ${result}`;
  output.appendChild(p);
  console.log(p.textContent);
});
// Fin de l'exercice 9
