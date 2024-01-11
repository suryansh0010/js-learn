const mysym = Symbol("key1")

const jsUser = {
    name: "harshit",
    "full name": "Harsit_Awasthi",
    [mysym]:"mykey1",
    age: 18,
    location: "ghaziabad",
    email:"harshit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}
// console.log(jsUser["full name"])
// console.log(jsUser["age"])
// console.log(jsUser["mysym"])

jsUser.email = "harshit@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "harshit@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello JS User");
}
jsUser.greeting2 = function(){
    console.log(`hello JS User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());