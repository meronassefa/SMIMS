const express = require('express');
const router = express.Router();

const employeeController = require('../controller/employeeController');



router.route('/')
    .get(employeeController.getTenants)

//add tenants

router.route('/add')
    .get(employeeController.postTenants)

module.exports = router;