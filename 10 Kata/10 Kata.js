//* Dado el siguiente javascript usa forof y forin para hacer la media del
//* volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

let sum = 0
for (const user of users) {
  for (const key in user) {
    if (key === 'favoritesSounds') {
      console.log(user[key])
      for (const style in user[key]) {
        if (
          style === 'waves' ||
          style === 'rain' ||
          style === 'firecamp' ||
          style === 'shower' ||
          style === 'train'
        ) {
          console.log(user[key][style])
          for (const volume in user[key][style]) {
            if (volume === 'volume') {
              sum += user[key][style][volume]
              console.log(sum)
            }
          }
        }
      }
    }
  }
}

sum = sum / (users.length * 3)
sum = parseFloat(sum.toFixed(4))

console.log(sum)
