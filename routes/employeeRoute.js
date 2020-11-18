const express = require('express');
const router = express.Router();

const employeeController = require('../controller/employeeController');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'employee';
    next();
})

router.route('/')
    .get(employeeController.index)

//add tenants

// router.route('/add')
//     .get(employeeController.postTenants)

router.route('/tenantRegistration')
    .get(employeeController.registerPage)
    .post(employeeController.registerPost)

// router.route('/tenant')
//     .get(employeeController.getTenants)




module.exports = router;