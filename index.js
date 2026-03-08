const express = require('express')
const app = express()
const glitchRoutes = require('./src/routes/glitch');
const port = 3000

app.use(express.json());
app.use('/glitch', glitchRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})