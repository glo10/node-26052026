// objectif créer les chemins absolus pour tous mes dossiers et sous-dossiers
import { resolve, join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
/**
 * la fonction fileURLToPath transforme URL en chemin
 * Propre à ECMASCRIPT standard ESM donc fichier .mjs
 */
console.log('import.meta', import.meta)
const rootPathFilename = fileURLToPath(import.meta.url)
console.log('rootPath', rootPathFilename)
const dirnameRoot = dirname(rootPathFilename)
console.log('dirname root', dirnameRoot)
/**
 * A partir de la racine obtenu, on peut reconstruire nos routes en étant fidèle à l'arborescence de l'app
 */

/**
 * join() : concatène des chemins (met bout à bout les chemin)
 * resolve() : idem mais resolve() retourne un chemin absolue
 * Exemples
 *  join('a', 'b') => a/b => construire des sous-chemin à partir d'une base absolue
 *  resolve('a', 'b') => /a/b => construire des chemins absolus
 */
export const publicDir = resolve(dirnameRoot, 'public');
export const homeHtmlDir = join(publicDir, 'html', 'home');
export const imagesDir = join(homeHtmlDir, '..', '..', 'images');
