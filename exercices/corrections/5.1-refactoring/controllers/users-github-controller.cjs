const { findAll, findOne } = require('../models/users-github-model.cjs')
const getUsers = (req, res) => {
    // appel du model pour recup data
    const users = await findAll()
    // passage des data à la vue
    res.render('users/list', { users })
}

const getOneUser = async (req, res) => {
    const login = req.params.login
    const user = await findOne(login)
    res.render('users/single', { user })
}

module.exports = {
    getUsers,
    getOneUser
}