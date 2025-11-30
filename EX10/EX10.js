// Exercice 10 — Comparaison itératif vs récursif
const btn = document.getElementById('btn');
const nInput = document.getElementById('n');
const output = document.getElementById('output');

function sommeIterative(n) {
  let somme = 0;
  for (let i = 1; i <= n; i++) {
    somme += i;
  }
  return somme;
}

function sommeRecursive(n) {
  if (n === 1) return 1;
  return n + sommeRecursive(n - 1);
}

btn.addEventListener('click', function () {
  output.innerHTML = '';
  const n = Number(nInput.value);
  if (isNaN(n) || nInput.value === '' || n < 1 || !Number.isInteger(n)) {
    const p = document.createElement('p');
    p.textContent = 'Veuillez entrer un entier positif (n ≥ 1).';
    output.appendChild(p);
    return;
  }
  const sIter = sommeIterative(n);
  const sRec = sommeRecursive(n);
  const p1 = document.createElement('p');
  p1.textContent = `Somme itérative de 1 à ${n} : ${sIter}`;
  output.appendChild(p1);
  console.log(p1.textContent);
  const p2 = document.createElement('p');
  p2.textContent = `Somme récursive de 1 à ${n} : ${sRec}`;
  output.appendChild(p2);
  console.log(p2.textContent);
});
// Fin de l'exercice 10
