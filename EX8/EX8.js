// Exercice 8 — Fonction : calcul d’un total avec remise
const btn = document.getElementById('btn');
const totalInput = document.getElementById('total');
const remiseInput = document.getElementById('remise');
const output = document.getElementById('output');

btn.addEventListener('click', function () {
  output.innerHTML = '';
  const total = Number(totalInput.value);
  const remise = Number(remiseInput.value);
  if (isNaN(total) || isNaN(remise) || totalInput.value === '' || remiseInput.value === '') {
    const p = document.createElement('p');
    p.textContent = 'Veuillez entrer un total HT et une remise en % valides.';
    output.appendChild(p);
    return;
  }
  // Calcul du total final
  const totalFinal = total - (total * remise / 100);
  const p = document.createElement('p');
  p.textContent = `Total final après remise : ${totalFinal.toFixed(2)} €`;
  output.appendChild(p);
  console.log(p.textContent);
});

