const myNums= [1,2,3]

// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval 
// },0)

const myTotal = myNums.reduce( (acc,curr) => acc + curr , 0)

// console.log(myTotal);


const shoopingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "python course",
        price:999
    },
    {
        itemName: "DSA course",
        price:5999
    },
    {
        itemName: "webdev course",
        price:4999
    },
    {
        itemName: "app devlopment course",
        price:8899
    }
]

const priceToPay = shoopingCart.reduce( (acc,item) => acc+  item.price, 0 )

console.log(priceToPay)