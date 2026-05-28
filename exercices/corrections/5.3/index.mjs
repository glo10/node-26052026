import app from './app.mjs'

const PORT = 8053
app.listen(PORT, () => {
  console.info(`API on https://localhost:${PORT}`)
})