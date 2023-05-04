const { hashSync, compareSync } = require("bcrypt")

const hashPassword = ((password)=>{
    const hash = hashSync(password, 8)
    return hash
})

const comparePass = ((pass, hassPass)=>{
    const compare = compareSync(pass, hassPass)
    return compare
})

module.exports = {hashPassword, comparePass }