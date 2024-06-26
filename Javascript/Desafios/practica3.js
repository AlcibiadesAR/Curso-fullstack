// Matrices

// 1. Gastos por semana
let controlDeGastos = [
  [30, 50, 45, 55, 40, 60, 35],
  [32, 48, 47, 52, 42, 58, 38],
  [35, 45, 50, 55, 40, 65, 30],
  [33, 53, 44, 54, 41, 62, 36],
];

console.table(controlDeGastos);

function totalDeSemana(matriz, semana) {
  let totalSemanal = 0;
  for (let i = 0; i < matriz[semana].length; i++) {
    totalSemanal += matriz[semana - 1][i];
  }
  return totalSemanal;
}

console.log(
  `Su gasto de la semana es de: $${totalDeSemana(controlDeGastos, 2)}`
);

// 2. Gastos de un día de la semana

function totalDelDia(matriz, dia) {
  let totalDia = 0;
  for (let i = 0; i < matriz.length; i++) {
    totalDia += matriz[i][dia - 1];
  }
  return totalDia;
}

console.log(`Su gasto del dia es de: $${totalDelDia(controlDeGastos, 2)}`);

// 3. Gasto total

function totalDelMes(matriz) {
  let gastoTotal = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      gastoTotal += matriz[i][j];
    }
  }
  return gastoTotal;
}

console.log(`Su gasto del mes es de: $${totalDelMes(controlDeGastos)}`);

// Callbacks
function gastosSemanales(matriz, Callbacks) {
    let gastos = [];
    let total = 0;
    matriz.forEach(semana => {
        total = semana.reduce((totalFinal, dia ) => totalFinal + dia);
        gastos.push(total)
    });

    Callbacks(gastos);
}

function mostrarTotalDeGastos(resultado) {
    console.log(resultado);
}


gastosSemanales(controlDeGastos, mostrarTotalDeGastos)