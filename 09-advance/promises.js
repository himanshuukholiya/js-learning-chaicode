const promiseOne = new Promise( (resolve, reject) => {
    // do an async task
    // db calls
    // cryptography
    // network related
    setTimeout(() => {
        console.log('Async task is complete')
        resolve() // will log .then value/function
    }, 1000);
})

// .then & resolve are related 

promiseOne.then(() => {
    console.log("Promise Comsumed")
})

// aam zindagi se hatt ke

new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log("Async 2")
        resolve()
    }, 1000);
}).then( () => {
    console.log("Hila Dala na")
})

// pass parameters 

const promiseThree = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve({username: "hemaan", email: "hk@hemaan.com"})
    })
})

promiseThree.then((user) => {
    console.log(user)
})

// .catch() => reject

const promiseFour = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = true // change to false and check both condition
        if (!error) {
            resolve({username: "hemaan", password: "1234567890"})
        } else {
            reject("ERROR: something went wrong")
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user)
    return user.username // returns to next .then
}).then((username) => { // known as chaining 
    console.log(username)
}).catch( (err) => {
    console.log(err)
}).finally( () => { // .finally always logs
    console.log("Promise is either resolved or rejected")
})

// using async await 

const promiseFive = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({language: "js", password: "1234567890"})
        } else {
            reject("ERROR: js went wrong")
        }
    }, 1000)
})

consumePromiseFive = async () => {
    // here we can use await => only takes true para
    // or use try() => await logic, catch() => false para
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// doing something from external data

/* 
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:", error)
    }
}
getAllUsers()
 */


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})