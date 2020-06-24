const Sequelize = require('sequelize');
const db = require('../config/database');
const tenant = db.define('tenant', {
    // id: {
    //     type: Sequelize.INTEGER
    //     primary
    // },
    fullName: {
        type: Sequelize.STRING,
        required: true
    },
    companyName: {
        type: Sequelize.STRING
    },
    phoneNo: {
        type: Sequelize.STRING,
        required: true
    },
    tinNo: {
        type: Sequelize.STRING,
        required: true
    },
    address: {
        type: Sequelize.STRING
    },
    userName: {
        type: Sequelize.STRING,
        required: true
    },
    password: {
        type: Sequelize.STRING,
        required: true
    },


})
module.exports = tenant;