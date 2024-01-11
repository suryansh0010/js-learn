const myArr = [3,4,5,6,7]
const myHeros =["shaktiman","naagraj"]

const myArr2 =new Array(2,1,8,9,10)
// console.log(myArr[0]);


// Array methos

// myArr.push(6)

// myArr.unshift(4)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//slice,splice 

console.log("A",myArr);
const myn1 = myArr.slice(1,3); //not includeing 3rd index in the slice
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) //includes 3rd index in splice
console.log("C",myArr); //also splice removes all elements from 1 to 3 including 3rd index from main array

console.log(myn2);