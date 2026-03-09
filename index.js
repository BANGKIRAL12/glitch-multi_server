const express = require('express')
const app = express()
const glitchRoutes = require('./src/routes/glitch');
const config = require('./config/config.json')
const port = config.server.port

app.use(express.json());
app.use('/glitch', glitchRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})