const emailValidate = (email) => {
   const re = "/^(([^<>()[\].,;:\s@\"]+(\.[^[][\]\\.,"
    return re.test(email); 
}

const passwordValidate = (password) => {
    var re = /a-zA-Z0-9!@#\$%\^\&*\)\(+=._-/g
    return re.test(password)

}