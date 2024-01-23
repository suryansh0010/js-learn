const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise consumed");
});


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)

}).then(function(){
    console.log("asyn 2 resolve");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email:"chai123@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
        console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "harshit", password: "123"})
        }else{
            reject('ERROR: Somthing went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("the promise is either resolve or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumepromiseFive(){
    try {
        const respose = await promiseFive
        console.log(respose);
    } catch (error) {
        
    }
}

consumepromiseFive()

// async function getAllUsers(){
//    try {
//     const respose = await fetch('https://api.github.com/users/hiteshchoudhary')
//     const data =await respose.json()
//     console.log(data);
//    } catch (error) {
//     console.log("error",error)
//    }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((respose)=>{
    return respose.json()
}).then((data)=>{
     console.log(data);
})
.catch((error) => console.log(error))
