const express = require('express')
const usersRepo = require('../../repositories/users')
const signupTemplate = require('../../views/admin/auth/signup')
const signinTemplate = require('../../views/admin/auth/signin')
const { requireEmail, requirePassword, requirePasswordConfirmation, requireSignInEmail, requireValidPasswordForUser } = require('./validators')
const { handleErrors } = require('./middlewares')
const { getAll } = require('../../repositories/users')

const router = express.Router()

router.get('/signup', (req, res) => {
    res.send(signupTemplate({ req }))
})

router.post('/signup', requireEmail, requirePassword, requirePasswordConfirmation, handleErrors(signupTemplate), async (req, res) => {
    const { email, password } = req.body
    const user = await usersRepo.create({ email, password })

    req.session.userId = user.id

    res.send('Account Created')
})

router.get('/signin', (req, res) => {
    res.send(signinTemplate({ req }))
})

router.post('/signin', requireSignInEmail, requireValidPasswordForUser, handleErrors(signinTemplate), async (req, res) => {
    const { email } = req.body

    const user = await usersRepo.getOneBy({ email });

    req.session.userId = user.id;

    res.send('Logged In');
})

module.exports = router