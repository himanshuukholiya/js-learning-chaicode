class user {
    constructor(username) {
        this.username = username
    }

    logMe () {
        return `Username is ${this.username}`
    }
}

// inheritance => extends keyword is used

class teacher extends user {
    constructor(username, email, password){
        super(username) // syntactical sugar of .call(this, )
        this.email = email
        this.password = password
    }

    addCouse () {
        console.log(`new course was added by ${this.username}`);
        
    }
}

const babaYaga = new teacher("Boogeyman", "johnwick@hotmail.com", "fortuneFavoursBold")

babaYaga.addCouse()
babaYaga.logMe() // inheritance

const montana = new user("tonyMontana")
console.log(montana.logMe())

console.log(babaYaga instanceof user) // to check object is instance of class

