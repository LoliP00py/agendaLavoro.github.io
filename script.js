const entrataButton = document.getElementById('entrata-button');
const uscitaButton = document.getElementById('uscita-button');
const calcolaOreButton = document.getElementById('calcola-ore-button');
const entrataLabel = document.getElementById('entrata-label');
const uscitaLabel = document.getElementById('uscita-label');
const oreLavorateLabel = document.getElementById('ore-lavorate-label');

let entrata;
let uscita;

function registraEntrata() {
	// Registra l'orario di entrata
	entrata = new Date();
	entrataLabel.innerText = `Entrata: ${entrata.toLocaleTimeString()}`;

	// Abilita il pulsante di uscita e disabilita quello di entrata
	entrataButton.disabled = true;
	uscitaButton.disabled = false;
}

function registraUscita() {
	// Registra l'orario di uscita
	uscita = new Date();
	uscitaLabel.innerText = `Uscita: ${uscita.toLocaleTimeString()}`;

	// Abilita il pulsante di calcolo ore
	calcolaOreButton.disabled = false;

        // Abilita il pulsante di uscita e disabilita quello di entrata
	entrataButton.disabled = false;
	uscitaButton.disabled = true;
}

function calcolaOre() {
	// Calcola il numero di ore lavorate
	const oreLavorate = (uscita - entrata) / (1000 * 60 * 60 * 60);
	oreLavorateLabel.innerText = `Hai lavorato per ${oreLavorate.toFixed(2)} ore`;
}
