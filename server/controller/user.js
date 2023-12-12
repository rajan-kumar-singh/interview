const UserModel = require('../models/user')
// const nodemailer = require('nodemailer')

module.exports.signup = (req, res) => {
    console.log(req.body)

    // email should not exist alreday

    const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    });

    newUser.save().then(() => {
        res.send({ code: 200, message: 'Signup success' })
    }).catch((err) => {
        res.send({ code: 500, message: 'Signup Err' })
    })

}


module.exports.signin = (req, res) => {
    console.log(req.body.email)

    // email and password match

    UserModel.findOne({ email: req.body.email })
        .then(result => {
            console.log(result, '11')

            // match password with req.body.password
            if (result.password !== req.body.password) {
                res.send({ code: 404, message: 'password wrong' })
            } else {
                res.send({
                    email: result.email,
                    code: 200,
                    message: 'user Found',
                    token: 'hfgdhg'
                })
            }

        })
        .catch(err => {
            res.send({ code: 500, message: 'user not found' })
        })
}

