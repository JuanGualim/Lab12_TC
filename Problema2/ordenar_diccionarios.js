// Problema 2: ordenar una lista de diccionarios (objetos) respecto a un key,
// usando únicamente funciones lambda (arrow functions) y sin mutar la entrada.
//
// Uso:
//   node ordenar_diccionarios.js                 -> ejemplo del enunciado
//   node ordenar_diccionarios.js <key>           -> ejemplo ordenado por <key>
//   node ordenar_diccionarios.js <key> '<json>'  -> lista propia ordenada por <key>

// Compara dos valores: numérico si ambos son números, alfabético en otro caso.
const comparar = (a, b) =>
  typeof a === 'number' && typeof b === 'number'
    ? a - b
    : String(a).localeCompare(String(b));

// Devuelve una NUEVA lista ordenada por el key indicado (la original no cambia).
const ordenarPorKey = (lista, key) =>
  [...lista].sort((d1, d2) => comparar(d1[key], d2[key]));

// Verifica que todos los diccionarios tengan el key pedido.
const todosTienenKey = (lista, key) => lista.every((d) => key in d);

// Formatea valores con el estilo del enunciado: {'make': 'Nokia', 'model': 216}
const formatear = (v) =>
  typeof v === 'string'
    ? `'${v}'`
    : v !== null && typeof v === 'object'
      ? `{${Object.entries(v).map(([k, x]) => `'${k}': ${formatear(x)}`).join(', ')}}`
      : String(v);

const formatearLista = (lista) =>
  `[\n${lista.map((d) => `    ${formatear(d)}`).join(',\n')}\n]`;

const ejemplo = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' },
];

const mostrar = (lista, key) =>
  todosTienenKey(lista, key)
    ? console.log(
        `Ordenada por key = '${key}':\n${formatearLista(ordenarPorKey(lista, key))}\n`
      )
    : console.log(`Error: no todos los diccionarios tienen el key '${key}'.\n`);

const main = ([key, json]) => {
  const lista = json ? JSON.parse(json) : ejemplo;
  console.log(`Lista original:\n${formatearLista(lista)}\n`);
  (key ? [key] : ['model', 'make', 'color']).forEach((k) => mostrar(lista, k));
};

main(process.argv.slice(2));
