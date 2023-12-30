const name = "suryansh"
const repoCount = 10

console.log (`hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('harshit_ik')
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const url="https://harshit.com/harshit%20awasthi"

console.log(url.replace('%20','-'))

console.log(url.includes('sunder'))