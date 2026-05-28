const express = require('express')
const router = express.Router()

// match avec la route /github
router.get('/', (req, res) => {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(users => {
        console.log('users', users)
        res.render('users/list', { users })
    })
    .catch(() => res.render('error', { message: 'Aucun utilisateur', status: 500 }))
 // callback qui s'exécute sur cette route quand un utilisateur fera une req GET /users-github
})

// match avec GET /github/:login avec login dynamique
router.get('/:login', async (req, res) => {
    const login = req.params.login
    const user = await fetch(`https://api.github.com/users/${login}`).then(data => data.json())
    console.log('user', user)
    res.render('users/single', { user })
})


module.exports = router