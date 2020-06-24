const tenants = require('../models/tenantsRegistration');


module.exports = {

    index: (req, res) => {
        res.render('employee/index')
    },

    // getTenants: (req, res) => {

    //     tenants.findAll()
    //         .then(tenants => {

    //             console.log(tenants)
    //             res.render('main', {
    //                 tenants
    //             })

    //         })
    //         .catch(err => console.log(err))



    // },

    registerPage: (req, res) => {
        res.render("employee/tenantRegistration")
        // res.render('employee/tenantRegistration')

    },
    // // registerPost: (req, res) => {
    // //     res.send("Successfully Registered")
    // //     const newRegistration = new tenants({
    // //         fullName: req.body.fullname,
    // //         companyName: req.body.companyName,
    // //         phoneNo: req.body.phonenumber,
    // //         tinNo: req.body.tinNumber,
    // //         address: req.body.address,
    // //         userName: req.body.name,
    // //         password: req.body.password

    // //     });
    //     newRegistration.save().then(post => {
    //         console.log(post);
    //         req.flash('success-message', 'Tenant Registered successfuly')
    //         res.redirect('/employee/tenantRegistration');
    //     })
    // }


    registerPost: (req, res) => {

        let {
            fullName,
            companyName,
            phoneNo,
            tinNo,
            address,
            userName,
            password
        } = req.body;

        let errors = [];

        //Validate Fields
        if (!fullName) {
            errors.push({
                text: 'Please add full Name'
            });

        }
        if (!fullName) {
            errors.push({
                text: 'Please add Full Name'
            });

        }
        if (!phoneNo) {
            errors.push({
                text: 'Please add Phone No'
            });

        }
        if (!tinNo) {
            errors.push({
                text: 'Please add Tin No.'
            });

        }
        if (!address) {
            errors.push({
                text: 'Please add address'
            });

        }
        if (!userName) {
            errors.push({
                text: 'Please add User Name'
            });

        }
        if (!password) {
            errors.push({
                text: 'Please add password'
            });

        }
        if (errors.length > 0) {
            res.render('employee/tenantRegistration', {
                errors,
                fullName,
                phoneNo,
                tinNo,
                address,
                userName,
                password

            });
        } else {
            tenants.create({
                    fullName,
                    companyName,
                    phoneNo,
                    tinNo,
                    address,
                    userName,
                    password
                })
                .then(tenants => res.redirect('/employee/tenantRegistration'))
                .catch(err => console.log(err))

        }
    },
    //Insert into table


    // submitPosts: (req, res) => {
    //     res.send("successfully Registered");
    // },
    // submitPosts: (req, res) => {
    //     // res.send("post submited")

    //     const commentsAllowed = req.body.allowComments ? true : false;
    //     const newPost = new Post({
    //         title: req.body.title,
    //         description: req.body.description,
    //         status: req.body.status,
    //         allowComments: commentsAllowed
    //     });
    //     newPost.save().then(post => {
    //         console.log(post);
    //         req.flash('success-message', 'Post created successfully.');
    //         res.redirect('/admin/posts');

    //     });

    // },
    // creatPost: (req, res) => {
    //     res.render('admin/posts/create')
    // },
    // editPosts: (req, res) => {
    //     const id = req.params.id;
    //     Post.findById(id).then(post => {
    //         res.render('admin/posts/edit', {
    //             post: post
    //         });

    //     });

    // }


}