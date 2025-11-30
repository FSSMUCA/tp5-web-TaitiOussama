// Exercice 3 — Condition imbriquée : classification d'un nombre
// Demander un nombre à l'utilisateur avec prompt().
// Afficher :
// "Nombre négatif" si < 0
// "Petit" entre 0 et 10
// "Moyen" entre 11 et 50
// "Grand" si > 50
// "Très grand" si > 100

const output = document.getElementById('output');

// Demande la valeur à l'utilisateur
let input = prompt("Entrez un nombre :");
const n = Number(input);

const p = document.createElement('p');

if (isNaN(n)) {
  p.textContent = `Entrée invalide ("${input}") — veuillez entrer un nombre.`;
  output.appendChild(p);
  console.log(p.textContent);
} else {
  // Conditions imbriquées demandées
  if (n < 0) {
    p.textContent = 'Nombre négatif';
    output.appendChild(p);
    console.log(p.textContent);
  } else {
    // n >= 0
    if (n > 100) {
      p.textContent = 'Très grand';
      output.appendChild(p);
      console.log(p.textContent);
    } else {
      // 0 <= n <= 100
      if (n > 50) {
        p.textContent = 'Grand';
        output.appendChild(p);
        console.log(p.textContent);
      } else {
        // 0 <= n <= 50
        if (n >= 11) {
          p.textContent = 'Moyen';
          output.appendChild(p);
          console.log(p.textContent);
        } else {
          // 0 <= n <= 10
          p.textContent = 'Petit';
          output.appendChild(p);
          console.log(p.textContent);
        }
      }
    }
  }
}

// Fin de l'exercice 3
