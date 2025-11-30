// Exercice 7 — Fonction : validation d'un mot de passe
const btn = document.getElementById('btn');
const mdpInput = document.getElementById('mdp');
const output = document.getElementById('output');

btn.addEventListener('click', function () {
  output.innerHTML = '';
  const mdp = mdpInput.value;
  // Validation : au moins 8 caractères et contient @
  let estValide = false;
  if (mdp.length >= 8 && mdp.includes('@')) {
    estValide = true;
  }
  const p = document.createElement('p');
  if (estValide) {
    p.textContent = 'Mot de passe valide';
    p.style.color = 'green';
  } else {
    p.textContent = 'Mot de passe non valide';
    p.style.color = 'red';
  }
  output.appendChild(p);
  console.log(p.textContent);
});
// Fin de l'exercice 7
