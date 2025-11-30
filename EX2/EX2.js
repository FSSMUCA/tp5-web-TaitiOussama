// Exercice 2 — Manipulation de chaînes et concaténation (refait)
// Objectif : construire la phrase "Je m'appelle Sara et j'ai 22 ans" et
// modifier l'âge en 23 sans recréer toute la chaîne (utiliser une variable intermédiaire).

const prenom = 'Sara';
let age = 22;

const output = document.getElementById('output');

// Construire le paragraphe sans innerHTML : texte + <strong>prenom</strong> + texte + <span id="age">age</span> + texte
const p = document.createElement('p');

// "Je m'appelle "
p.appendChild(document.createTextNode("Je m'appelle "));

// <strong>prenom</strong>
const strongName = document.createElement('strong');
strongName.textContent = prenom;
p.appendChild(strongName);

// " et j'ai "
p.appendChild(document.createTextNode(" et j'ai "));

// <span id="age">age</span>
const ageSpan = document.createElement('span');
ageSpan.id = 'age';
ageSpan.textContent = age;
p.appendChild(ageSpan);

// " ans." (point final)
p.appendChild(document.createTextNode(' ans.'));

output.appendChild(p);
console.log(`Affichage initial : Je m'appelle ${prenom} et j'ai ${age} ans.`);

// Ajouter un bouton pour démontrer la modification de l'âge via une variable intermédiaire
const btn = document.createElement('button');
btn.textContent = "Modifier l'âge en 23";
output.appendChild(btn);

const info = document.createElement('p');
info.style.fontStyle = 'italic';
output.appendChild(info);

btn.addEventListener('click', function () {
	// variable intermédiaire
	let ageInterm = age;
	// modification
	ageInterm = 23;
	// Met à jour uniquement le span contenant l'âge (sans recréer tout le paragraphe)
	ageSpan.textContent = ageInterm;
	info.textContent = `Âge modifié via variable intermédiaire (ageInterm) : ${ageInterm}`;
	console.log(`Après modification : Je m'appelle ${prenom} et j'ai ${ageInterm} ans.`);
	// Mettre à jour la valeur de base si on veut persister
	age = ageInterm;
});

// Fin de l'exercice 2 (refait)
