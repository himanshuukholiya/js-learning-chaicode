class user {
    constructor(username) {
        this.username = username
    }

    logMe () {
        return `Username: ${this.username}`
    }

    // static => called on the class, not on instances

    static createId() {
        return`123`
    }
}

const heman = new user("hk")

console.log(heman.logMe()); 
console.log(user.createId()); // calling static => from class(user) 