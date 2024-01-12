// Immidiately Invoke Function Expressions (IIFE)


(function chai(){
    // named IFEE

     console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name} `);
})("harshit")

