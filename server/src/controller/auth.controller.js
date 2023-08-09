/* eslint-disable no-undef */
const AuthService = require('../service/auth');

const register = async (req, res) =>{
    await AuthService.save(req.body)
    .then((response) => res.json(response))
    .catch((error)=> res.json(error))
}

const registerAdmin = async (req, res) =>{
    await AuthService.saveAdmin(req.body)
    .then((response) => res.json(response))
    .catch((error)=> res.json(error))
}

const login = async (req, res) => {
    await AuthService.login(req.body)
    .then((response) => res.json(response))
    .catch((error)=> res.json(error))
}

const forgotPassword = async (req, res) => {
    const email  = req.params.email
    await AuthService.forgotPassword(email)
    .then((response) => res.json(response))
    .catch((error)=> res.json(error))
}

module.exports = { register, registerAdmin, login, forgotPassword }