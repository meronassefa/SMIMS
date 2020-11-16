const Expense = require('../models/Expense')


exports.getExpense = function (req, res) {

  //  res.render('tenantRegistration')
    res.render('expense', {
        regErrors: req.flash('regErrors')
    })

}

exports.postExpense = function (req, res) {
 console.log("hi1")
  let expense = new Expense(req.body)
  expense.addExpense().then(()=>{
      
    console.log("congratulation")
    res.redirect('expense')
               
  }).catch((regErrors)=>{
      regErrors.forEach(function (error) {
          req.flash('regErrors', error)
          console.log("error")

      })
      req.session.save(function () {
          res.redirect('expense')
      })

  })
}