const express = require('express');
const router = express.Router();
const defaultController = require('../controller/defaultController')

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'default';
    next();
})

router.route('/')
    .get(defaultController.index);
router.route('/login')
    .get(defaultController.loginGet)

router.route('/employee')
    .post(defaultController.loginPost)


module.exports = router;