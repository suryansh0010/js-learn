const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (value){
//     console.log(value);
// } )

// coding.forEach( (value) => {
//     console.log(value);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item, index,arr)=>{
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item) => {
    console.log(`${item.languageFileName} is a coding name of ${item.languageName}`);
    
})