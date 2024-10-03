function setUserName (username) {
    this.username = username
}

function createUser (username, email, password) {
    // setUserName(username) => calling without any context 
    setUserName.call(this, username) // call => calling with context, this => set value in current instance

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@google.com", "1234")
console.log(chai)