const Room = require('../models/Room')


exports.room = function (req, res) {

  //  res.render('tenantRegistration')
    res.render('room', {
        regErrors: req.flash('regErrors')
    })

}
exports.postRoom = function (req, res) {
    // console.log(req.body)
    let room = new Room(req.body)
    room.addRoom().then(()=>{
        // req.session.user = {username: user.data.username}
        // req.session.save(function () {
            res.redirect('room')
        // })
    }).catch((regErrors)=>{
        regErrors.forEach(function (error) {
            req.flash('regErrors', error)

        })
        req.session.save(function () {
            res.redirect('room')
        })

    })
}
