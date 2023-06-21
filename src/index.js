const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const route = require('./routes')
const db = require('./config/db')

const app = express();
const port = 3000

//connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(methodOverride('_method'))
//template engine
app.engine(
    'hbs', 
    handlebars.engine({
          extname:'.hbs',
          helpers: {
           sum:(a, b) =>a+b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

//Index init
route(app);




app.listen(port, () => {
  console.log(`He thong dang chay tai http://localhost:${port}`)
})