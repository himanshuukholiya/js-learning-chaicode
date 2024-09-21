// for loop

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// nested for loop

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop i: ${i}`)
    for (let j = 0; j <= 10; j++) {
        console.log(`Innfer Loop i: ${i} & j: ${j}`)
    }
}

// arrays for loop

let myArray =["batman", "wonder woman", "eternals"]

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

// break & continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5")
        break // terminate code
    }
    console.log(`Value is: ${i}`)
}

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Detected 5")
        continue // skips current & code continues
    }
    console.log(`Value is: ${i}`)
}