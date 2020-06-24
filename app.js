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