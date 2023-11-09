let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 16;


if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Verifica a idade e o tempo de registro para determinar o horário da corrida.
if (age > 18 && registeredEarly) {
  console.log(`Corredor com número de corrida ${raceNumber} correrá às 9h30.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Corredor com número de corrida ${raceNumber} correrá às 11h00.`);
} else if (age < 18) {
  console.log( `Corredor com número de corrida ${raceNumber} correrá às 12h30.`);
} else {
  console.log("Corredor, por favor, veja a mesa de registro.");
}