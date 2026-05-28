const findAll = async (url = 'https://api.github.com/users') => {
    return fetch(url)
    .then(res => res.json())
    .catch(() => [])
}

const findOne = async (login, base = 'https://api.github.com/users') => {
    return fetch(`${base}/${login}`)
    .then(res => res.json())
    .catch(() => {})
}

module.exports = {
    findAll,
    findOne
}