module.exports = {
    index: (req, res) => {
        // res.send('INDEX')
        res.render('default/index')
    },
    loginGet: (req, res) => {
        res.render('default/login')
        // res.send("You have reached login page.")
    },
    loginPost: (req, res) => {
        res.render('employee/index')
        // res.send('Conguratulation you have successfully submit data')
    },


};