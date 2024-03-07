// *3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43]

const copyA = [...pointsList]
console.log(copyA)

//* 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }

const CopyObject = { ...toy }
console.log(CopyObject)

//* 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
//* spread operatos.

const pointsListTercero = [32, 54, 21, 64, 75, 43]
const pointsLis2 = [54, 87, 99, 65, 32]

const pointsJoined = [...pointsListTercero, ...pointsLis2]
console.log(pointsJoined)

//* 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
//* con spread operators.
const toys = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

const toyJoined = { ...toys, ...toyUpdate }
console.log(toyJoined)

//* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
//* pero sin editar el array inicial. De nuevo, usando spread operatos.
// !Ver
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']

let copyColor = [...colors]

copyColor.splice(2, 1)

console.log(copyColor)
