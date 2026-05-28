import express from 'express'

import indexRouter from './routes/index.mjs'
import  teamsRouter from './routes/teams.mjs'

const app = express();
// Middleware qui transforme req.body en objet JS donc évite par la suite de faire un JSON.parse()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Middleware qui définie tout ce qu'on autorise (les méthodes, les clients (navigateur, terminal, etc.))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  next();
});


app.use('/', indexRouter);
app.use('/teams', teamsRouter);

export default app
