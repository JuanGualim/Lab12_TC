// Problema 3: calcular la transpuesta X^T de una matriz X (lista de listas)
// usando únicamente funciones lambda (arrow functions).
//
// Uso:
//   node transpuesta.js                  -> ejemplos (incluye el del enunciado)
//   node transpuesta.js '[[1,2],[3,4]]'  -> matriz propia en formato JSON

// La columna j de X se convierte en la fila j de X^T.
const transpuesta = (X) =>
  X.length === 0 ? [] : X[0].map((_, j) => X.map((fila) => fila[j]));

// Una matriz es válida si todas sus filas tienen la misma longitud.
const esRectangular = (X) => X.every((fila) => fila.length === X[0].length);

const formatearMatriz = (X) =>
  `[\n${X.map((fila) => `    [${fila.join(', ')}]`).join(',\n')}\n]`;

const mostrar = (X) =>
  esRectangular(X)
    ? console.log(`X =\n${formatearMatriz(X)}\nX^T =\n${formatearMatriz(transpuesta(X))}\n`)
    : console.log('Error: todas las filas de la matriz deben tener la misma longitud.\n');

const ejemplos = [
  [[1, 2, 3], [4, 5, 6], [7, 8, 9]], // ejemplo del enunciado
  [[1, 2, 3], [4, 5, 6]],            // matriz 2x3 -> 3x2
  [[10, 20, 30, 40]],                // vector fila -> vector columna
];

const main = ([json]) => (json ? [JSON.parse(json)] : ejemplos).forEach(mostrar);

main(process.argv.slice(2));
