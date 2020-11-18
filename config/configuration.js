module.exports = {

    PORT: process.env.PORT || 5000,
    golobalVariables: (req, res, next) => {
        res.locals.success_message = req.flash('success-message');
        res.locals.error_message = req.flash('error-message');

        next();
    }

};