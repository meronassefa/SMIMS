const tenants = require('../models/tenantsRegistration');


module.exports = {

    index: (req, res) => {
        res.render('employee/index')
    },
    getTenants: (req, res) => {

        tenants.findAll()
            .then(tenants => {

                console.log(tenants)
                res.render('main', {
                    tenants
                })

            })
            .catch(err => console.log(err))



    },
    // postTenants: (req, res) => {
    //     const data = {
    //         fullName: 'samrawit',
    //         companyName: 'samri ',
    //         phoneNo: '0922787213',
    //         tinNo: '0000456998',
    //         address: 'yeka subcity wereka 13',
    //         userName: 'samri',
    //         password: '123'
    //     }
    //     let {
    //         fullName,
    //         companyName,
    //         phoneNo,
    //         tinNo,
    //         address,
    //         userName,
    //         password
    //     } = data;
    //     tenants.create({
    //             fullName,
    //             companyName,
    //             phoneNo,
    //             tinNo,
    //             address,
    //             userName,
    //             password
    //         })
    //         .then(tenants => res.redirect('/employee'))
    //         .catch(err => console.log(err))
    // },
    submitPosts: (req, res) => {
        res.send("successfully Registered");
    },
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

    registerPage: (req, res) => {
        res.render("employee/tenantRegistration")
        // res.render('employee/tenantRegistration')

    },
    registerPost: (req, res) => {
        res.send("Successfully Registered")
    }
}