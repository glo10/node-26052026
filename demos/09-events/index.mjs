
import { readFile, writeFile } from 'node:fs'

const rf = readFile('data.txt')
const wr = writeFile('data2.txt', 'Data 2, etc.')
rf.on('data', (chunk) =>console.log('chunk', chunk.toString()))

rf.on('error', (error) => console.log('error lecture', error))

wr.on('end', () => console.log('écriture terminée'))
wr.on('error', (error) => {
    console.log('error lecture', error)
})