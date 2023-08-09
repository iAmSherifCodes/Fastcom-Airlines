/* eslint-disable no-undef */
class NotFoundException extends Error{
    constructor(message){
        super(message)
    }
}

module.exports = { NotFoundException }