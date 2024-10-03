let myName = "hemaan         "
let platform = "chaiaurcode                 "

console.log(myName.length) // 15 => space count
console.log(myName.trim().length) // 6

// baking trueLength to remove extra whitespaces, but first => making own prototypes

let marvelHeroes = ["thor", "spiderman"]

let heroesPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function () {
        console.log(`spidy uses ${this.spiderman}`)
    }
}

// creating our own prototype

Object.prototype.himanshu = function () {
    console.log("Now Himanshu is prototype which passes in object(top hierarchy)")
}

heroesPower.himanshu()

marvelHeroes.himanshu() // because of prototype hierarchy => here, array takes object property

// inheritence => __proto__ => kisi aur ki property ko excess

const student = {
    username: "hk",
    email: "hk@google.com"
}

const teacher = {
    makeLectures: true,
}

const teachingAssistance = {
    isAvailabe: false,
}

const taSupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingAssistance,  // outdated way
}

teacher.__proto__ = student // outdata way

// morden syntax
Object.setPrototypeOf(teacher, teachingAssistance)

// back to business => baking trueLength

String.prototype.trueLength = function() {
    console.log(`True Length is: ${this.trim().length}`)
}

platform.trueLength()
"himanshuKholiya".trueLength()