class user {
    constructor(email, password){
        this.email = email
        this. password = password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `he${this._password}osaw`
    }
    set password(value) {
        this._password = value
    }
}

const heman = new user("himanshu@hk.com", "abcd")
console.log(heman.email)
console.log(heman.password)