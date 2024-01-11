const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullName: {
           firstname: "harhsit",
           lastname: "Awasthi"
        }
    }
}

// console.log(regularUser.fullname.userfullName.firstname)


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2) 

//we use {}first in assign beacuse first postion in assign is target every object goes in what is on first postion of assign if we take here obj1 then every other objects added in obj1 on in any other impty object so we use normal {} on first postion of assign.



const obj3 = {...obj1,...obj2}
// console.log(obj3);


const User = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "v@gmail.com"
    },
    {
        id: 3,
        email: "s@gmail.com"
    }
]

// console.log(User[0].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isloggedIn"));



// _________Destructuring of objects________________


const course= {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Harshit"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course

// console.log(courseInstructor);

console.log(Instructor);

// {
//     "name": "harshit",
//     "coursename": "js in hindi"
//     "price": "free"
// }

[
    {},
    {},
    {}
]


