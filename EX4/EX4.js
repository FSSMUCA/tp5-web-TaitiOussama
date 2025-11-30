// Exercice 4 — Multiples de 3 et 5 dans une plage
const btn = document.getElementById('btn');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const output = document.getElementById('output');

btn.addEventListener('click', function () {
  output.innerHTML = '';
  const min = Number(minInput.value);
  const max = Number(maxInput.value);
  if (isNaN(min) || isNaN(max) || minInput.value === '' || maxInput.value === '' || min > max) {
    const p = document.createElement('p');
    p.textContent = 'Veuillez entrer deux nombres valides (min ≤ max).';
    output.appendChild(p);
    return;
  }
  for (let i = min; i <= max; i++) {
    let label = '';
    if (i % 3 === 0 && i % 5 === 0) {
      label = 'Five&Three';
    } else if (i % 3 === 0) {
      label = 'Three';
    } else if (i % 5 === 0) {
      label = 'Five';
    }
    const p = document.createElement('p');
    p.textContent = label ? `${i} : ${label}` : `${i}`;
    output.appendChild(p);
  }
});
// Fin de l'exercice 4
