// Premitive

// 7 Types : String, Number, Boolean, null,undefiend, symbol
// ,BigInt

const score=100
const scoreValue =100.3
const isLoggedIn =  false
let userEmail;
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);

//Reference (Non primitive)

//Array, object ,Functions

const heros =["shaktiman","naagraj","harshit"]
let myObject ={
    name:"hitesh",
    age:12,
    Gender:"M"
}

const myFunction = function(){
    console.log("hello world");
}


//***********************************************

//stack (primitive),Heap (Non-premitive)

let myYoutubename = "hiteshchoudhary.com"
let anothername = myYoutubename
anothername = "chaiaurcode"


console.log(anothername);
console.log(myYoutubename);


let user ={
    email: "user@g.com",
    upiId: "user@ybl"
}