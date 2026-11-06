# Laboratorio 12 – Teoría de la Computación

Programación funcional con funciones lambda en **JavaScript (Node.js)**.
Todas las soluciones usan *arrow functions* (`x => ...`), funciones de orden
superior (`map`, `filter`, `every`, `sort`) y no mutan los datos de entrada.

## Video de ejecución

[Ver video en YouTube](https://youtu.be/xCAWFGMzdVU)

## Estructura

| Carpeta | Contenido |
|---|---|
| `Problema1/` | Respuestas teóricas en PDF (reducción-β de NOT, recursión y ciclos, cuándo usar programación funcional) |
| `Problema2/ordenar_diccionarios.js` | Ordena una lista de diccionarios respecto a un key |
| `Problema3/transpuesta.js` | Calcula la transpuesta de una matriz (lista de listas) |
| `Problema4/eliminar_elementos.js` | Elimina de una lista los elementos indicados en otra lista |

## Requisitos

- Node.js 18 o superior (`node --version`)

## Ejecución

```bash
# Problema 2: ejemplo del enunciado (ordena por 'model', 'make' y 'color')
node Problema2/ordenar_diccionarios.js
# Ordenar por un key específico o con una lista propia en JSON
node Problema2/ordenar_diccionarios.js model
node Problema2/ordenar_diccionarios.js edad '[{"nombre":"Ana","edad":30},{"nombre":"Luis","edad":19}]'

# Problema 3: ejemplos (incluye el del enunciado)
node Problema3/transpuesta.js
node Problema3/transpuesta.js '[[1,2,3],[4,5,6]]'

# Problema 4: ejemplo del enunciado
node Problema4/eliminar_elementos.js
node Problema4/eliminar_elementos.js '[1,2,3,4,5]' '[2,4,9]'
```

## Funciones principales

```js
// Problema 2
const ordenarPorKey = (lista, key) =>
  [...lista].sort((d1, d2) => comparar(d1[key], d2[key]));

// Problema 3
const transpuesta = (X) =>
  X.length === 0 ? [] : X[0].map((_, j) => X.map((fila) => fila[j]));

// Problema 4
const eliminar = (lista, borrar) => lista.filter((x) => !borrar.includes(x));
```
