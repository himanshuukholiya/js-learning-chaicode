const instaUser = new Object() // singleton object

console.log(instaUser) // {}    

instaUser.id = "123abc"
instaUser.name = "hemaan"
instaUser.isLoggedIn = true

console.log(instaUser) // { id: '123abc', name: 'hemaan', isLoggedIn: true }

console.log(Object.keys(instaUser)) // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(instaUser)) // [ '123abc', 'hemaan', true ]
console.log(Object.entries(instaUser)) // converts array inside array => [ [ 'id', '123abc' ], [ 'name', 'hemaan' ], [ 'isLoggedIn', true ] ]

const user = {
    email: "hi@hello.com",
    fullName: {
        userFullName: {
            firstName: "himanshu",
            lastName: "kholiya"
        }
    }
}
console.log(user.fullName.userFullName.firstName) // himanshu

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}


const obj3 = {obj1, obj2} 
console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({}, obj1, obj2) // first one is target, here {}
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// mostly used -> spread
const obj5 = {...obj1, ...obj2}
console.log(obj5) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// objects inside arrays:

let arrayObject = [
    {
        firstName: "hemaan",
        age: 18
    },
    {
        firstName: "himanshu", 
        age: 19
    },
    {
        firstName: "montana", 
        age: 18
    }
]

console.log(arrayObject[2].firstName) // montana