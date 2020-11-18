<<<<<<< HEAD
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const app = express()

let sessionOptions = session({
    secret:"Javascript is sooooo cool",
    store:new MongoStore({client:require('./db')}),
    resave : false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000 * 60 * 60 *24,
        httpOnly:true
    }
    
})
app.use(sessionOptions)
app.use(flash())

const router = require('./router')

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

module.exports = app
=======
const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const flash = require('connect-flash');
const session = require('express-session');


const db = require('./config/database');

const {
    golobalVariables
} = require('./config/configuration');

const {
    PORT
} = require('./config/configuration');

// Test Db
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error:' + err))



const app = express();

/** flash and session */
app.use(session({
    secret: 'anysecret',
    saveUninitialized: true,
    resave: true

}));
app.use(flash());

/**globaleVariables */
app.use(golobalVariables)

//Handlebars

app.engine('handlebars', hbs({
    defaultLayout: 'default'
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: false
}));

const defaultRoute = require('./routes/defaultRoute');
app.use('/', defaultRoute);



// app.get('/tenants', (req, res) =>
//     res.send('tenant page')
//     //  res.render('Employee/tenants')

// );

const employeeRoutes = require('./routes/employeeRoute');

app.use('/employee', employeeRoutes);





app.listen(PORT, console.log(`Server started on port ${PORT}`));
>>>>>>> f3043b18b06f38bbaaddb2b12ede1bfde3ffd06f
