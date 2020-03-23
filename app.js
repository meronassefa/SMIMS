const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');

const db = require('./config/database')


// Test Db
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error:' + err))



const app = express();

//Handlebars

app.engine('handlebars', hbs({
    defaultLayout: 'default'
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));


const defaultRoute = require('./routes/defaultRoute');
app.use('/', defaultRoute);



// app.get('/tenants', (req, res) =>
//     res.send('tenant page')
//     //  res.render('Employee/tenants')

// );

const employeeRoutes = require('./routes/employeeRoute');

app.use('/employee', employeeRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));