function sayMyName (){
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("t");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){

    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3,4)

// console.log(`result is: ${result}`);

function loginUserMessage(Username ="sam"){
    if(!Username){
        console.log("Please enter a user name")
        return
    }

    return `${Username} just logged in `
}

// console.log(loginUserMessage("harshit"))
// console.log(loginUserMessage())


function calculateCartPrice(val1,val2,...num1){
    return num1   
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "surya",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));