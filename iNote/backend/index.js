const connectToMongo=require('./db')

const express = require('express')

const app = express()
const port = 5000

connectToMongo();
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('HelloWorld! ')
})

app.listen(port, () => {
  console.log(`iNote Backend listening on port ${port}`)
})