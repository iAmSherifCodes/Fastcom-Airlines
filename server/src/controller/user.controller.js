/* eslint-disable no-undef */
const userService = require('../service/userService')

const createUser = async(req, res) => {
    try {
        const user = await userService.createUser(req.body)
        return res.json(user.data)
    } catch (error) {
        return res.status(500).send(res.json(error))
    }
}

async function getUserById(req, res){
    try {
        const { userId } = req.params
        const user = await userService.findUserById(userId)
        return res.json(user.data)
    } catch (error) {
        return res.status(500).send(res.json(error))
    }
}

const getUserByEmail = (async(req, res)=>{
    try {
        const { email } = req.params
        const user = await userService.findUserByEmail(email)
        return res.json(user.data)
    } catch (error) {
        return res.status(500).send(res.json(error))
    }
})

module.exports = { createUser, getUserById, getUserByEmail }