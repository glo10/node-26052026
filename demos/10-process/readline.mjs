import { createInterface } from 'node:readline/promises'
import { stdin, stdout} from 'node:process'
import { writeFile } from 'node:fs/promises'

const app = createInterface(stdin, stdout)
const r1 = await app.question('Votre voiture ?')
const r2 = await app.question('Votre adresse ?')

const content = { responseOne: r1, responseTwo: r2}
writeFile('reponses.json', JSON.stringify(content))