// filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4) // implicit

const explicitNums = myNums.filter( (num) => {
    return num > 4
})

console.log(newNums) // [ 5, 6, 7, 8, 9, 10 ]

console.log(explicitNums) // [ 5, 6, 7, 8, 9, 10 ]

// same in for each

const arrForNums = []
const usingForEach = myNums.forEach( (num) => {
    if (num > 4)
        arrForNums.push(num)
})

console.log(arrForNums) // [ 5, 6, 7, 8, 9, 10 ] => need to use empty array, conditionals bcz forEach doesn't return 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const historyBooks = books.filter( (history) => history.genre === "History")

console.log(historyBooks) // logs History books 

const publishAfter90s = books.filter ( (after90s) => after90s.publish > 1990)

console.log(publishAfter90s) // logs books published after 1990s

const historyAfter90s = books.filter( (bk) => bk.genre === "History" && bk.publish > 1990)

console.log(historyAfter90s) // logs history and published after 1990s books