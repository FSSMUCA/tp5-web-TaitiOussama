// Exercice 5 — Table de multiplication dynamique (version avec saisie sur la page)
const output = document.getElementById('output');
const btn = document.getElementById('btn');
const inputNb = document.getElementById('nb');

btn.addEventListener('click', function () {
  // Nettoyer l'affichage précédent
  output.innerHTML = '';
  const n = Number(inputNb.value);
  if (isNaN(n) || inputNb.value === '') {
    const p = document.createElement('p');
    p.textContent = `Entrée invalide — veuillez entrer un nombre.`;
    output.appendChild(p);
    console.log(p.textContent);
    return;
  }
  const h2 = document.createElement('h2');
  h2.textContent = `Table de multiplication de ${n}`;
  output.appendChild(h2);
  for (let i = 1; i <= 10; i++) {
    const p = document.createElement('p');
    p.textContent = `${n} x ${i} = ${n * i}`;
    output.appendChild(p);
    console.log(p.textContent);
  }
});
// Fin de l'exercice 5
