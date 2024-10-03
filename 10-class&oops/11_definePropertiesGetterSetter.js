function user(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function () {
            return `fdsf${this._password}nedsl`
        },
        set: function (value) {
            this._password = value
        }
    })
}

const montana = new user("montana@ai", "abcd")

console.log(montana.email)
console.log(montana.password)