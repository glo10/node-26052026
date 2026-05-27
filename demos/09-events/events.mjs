import { EventEmitter } from 'node:events'
import { setTimeout, setInterval, clearInterval } from 'node:timers'
const myEvent = new EventEmitter()
// Ecoute de l'événement app:demo
myEvent.on('app:demo', (...payload) => {
    console.log('param 1', payload[0])
    console.log('param 2', payload[1])
    console.log('param 3', payload[2])
    console.log('param 4', payload[3])
})
const idInterval = setInterval(() => {
    // Emission d'un événement nommée app:demo avec 4 paramètres
    myEvent.emit('app:demo', 20, { firstname: 'Glodie'}, ['Paris', 'Marseille'], false)
}, 1000)

const idTimeout = setTimeout(() => {
    // Arreter la répétion précédente de setInterval
    clearInterval(idInterval)
}, 5000)
