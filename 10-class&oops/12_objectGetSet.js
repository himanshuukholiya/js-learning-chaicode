const user = {
    _email: "heman@hk.com",
    _password: "abcd",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    },

    get password() {
        return `he${this._password}osaw`
    },
    set password(value) {
        this._password = value
    }
}

const heman = Object.create(user) // by default => Object.create => null 
console.log(heman.email)
console.log(heman.password)