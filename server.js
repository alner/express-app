import express from 'express'
const app = express()

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
  // response.send('<html><body>Hello world!</body></html>')
  response.render('index', { message: 'Hello world!'})
})

app.listen(3000,
  () => console.info('Express listening at http://localhost:3000')
)
