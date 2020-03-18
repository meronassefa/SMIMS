const Sequelize = require('sequelize');
const db = require('../config/database');
const tenant = db.define('tenant', {
    // id: {
    //     type: Sequelize.INTEGER
    //     primary
    // },
    fullName: {
        type: Sequelize.STRING
    },
    companyName: {
        type: Sequelize.STRING
    },
    phoneNo: {
        type: Sequelize.STRING
    },
    tinNo: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    userName: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },


})
module.exports = tenant;