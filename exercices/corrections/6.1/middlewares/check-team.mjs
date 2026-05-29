export default (req, res, next) => {
  const { name, country } = req.body
  if(name && country && typeof name === 'string' && typeof country === 'string' ){
    // ajout d'une variable team dans la requête qui pourra récupérer par le prochain middleware
    req.team = { name, country }
    next()
  } else {
    res.status(400).send({ success: false, message: `New team must have only name and country properties` });
  }
}