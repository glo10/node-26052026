import { readFile } from 'node:fs'
import { promisify } from 'node:util'
import { info, log, error } from 'node:console'

// readFile ici est asynchrone avec une callback
readFile('data.txt', (error, data) => {
    if(!error) console.log('data avec la callback classique', data.toString())
})
// promisify transforme une fonction callback en promesse
const readFilePromise = promisify(readFile)
readFilePromise('data.txt')
.then(data => log('data avec readFile promisify', data.toString())) // en cas de succès
.catch(err => error('error lecture de data.txt', err))