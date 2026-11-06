// Problema 4: eliminar de una lista los elementos indicados en otra lista,
// usando únicamente funciones lambda (arrow functions). Los elementos a borrar
// que no existan en la lista original simplemente se ignoran.
//
// Uso:
//   node eliminar_elementos.js                        -> ejemplo del enunciado
//   node eliminar_elementos.js '<lista>' '<borrar>'   -> listas propias en JSON

// Conserva solo los elementos que NO aparecen en la lista a borrar.
const eliminar = (lista, borrar) => lista.filter((x) => !borrar.includes(x));

const formatear = (lista) =>
  `[${lista.map((x) => (typeof x === 'string' ? `'${x}'` : String(x))).join(', ')}]`;

const ejemplo = {
  lista: ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'],
  borrar: ['amarillo', 'cafe', 'blanco'],
};

const mostrar = ({ lista, borrar }) => {
  const ignorados = borrar.filter((x) => !lista.includes(x));
  console.log(`Lista inicial:       ${formatear(lista)}`);
  console.log(`Elementos a borrar:  ${formatear(borrar)}`);
  console.log(`Ignorados (no está): ${formatear(ignorados)}`);
  console.log(`Salida:              ${formatear(eliminar(lista, borrar))}\n`);
};

const main = ([lista, borrar]) =>
  mostrar(lista && borrar ? { lista: JSON.parse(lista), borrar: JSON.parse(borrar) } : ejemplo);

main(process.argv.slice(2));
