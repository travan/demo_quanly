const express = require('express')
// App
const app = express()

// use process.env variables to keep private variables,
require('dotenv').config()

// Express Middleware
const helmet = require('helmet') // creates headers that protect from attacks (security)
const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests

// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'shop_phuc',
    port: '5432'
  }
});

//Router
const spRoute = require('./route/sanphamRoute')(db)
const dmRoute = require('./route/danhmucRoute')(db)
const ctspRoute = require('./route/chitietsanphamRoute')(db)

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined')) // use 'tiny' or 'combined'
//action route
app.use('/api', spRoute)
app.use('/api', dmRoute)
app.use('/api', ctspRoute)
// App Routes - Auth
app.get('/', (req, res) => res.send('hello world'))
// App Server Connection
app.listen(process.env.PORT || 8100, () => {
  console.log(`app is running on port ${process.env.PORT || 8100}`)
})