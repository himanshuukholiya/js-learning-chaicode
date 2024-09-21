// reduce => mostly used => pass accumulator, current value => also pass initialization in end

const myNums = [ 1, 2, 3]

const myTotal = myNums.reduce( (acc, currentValue) => {
    console.log(`acc: ${acc} & currentValue: ${currentValue}`)
    return acc + currentValue
}, 0)

const implicitTotal = myNums.reduce( (acc, currval) => acc + currval, 0) // implicit

console.log(myTotal)

console.log(implicitTotal)


// shopping cart example 

const shoppingCart = [
    {
        itemName: "Chocolate",
        price: 249
    }, 
    {
        itemName: "bread",
        price: 100
    }, 
    {
        itemName: "cold drink",
        price: 80
    }, 
    {
        itemName: "chips",
        price: 500
    }, 
    {
        itemName: "eggs",
        price: 340
    }, 
]

const totalCartPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0) // we can verify if price is in numbers or not

console.log(totalCartPrice)