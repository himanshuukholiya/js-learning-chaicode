// can we make the value of pi 4? if yes how, if no how?

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descriptor)

/* 
output :
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
  => therefore we can't change the value of pi
*/

const johnWick = {
    main:"johnwick",
    rating: 9,
    movie: true
}
console.log(Object.getOwnPropertyDescriptor(johnWick, "main"))
/* 
output : 
{
  value: 'johnwick',
  writable: true,
  enumerable: true,
  configurable: true
}
  => we can change value here
*/
Object.defineProperty(johnWick, "main", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(johnWick, "main"))
