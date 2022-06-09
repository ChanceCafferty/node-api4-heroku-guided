require('dotenv').config(); 

const server = require('./api/server');

console.log('process.env.PORT', process.env.PORT)

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})


// // // this function expects to recieve either a 1 or a 2
// // function someProcedure(a) {
// //     if(a == 1) {
// //         return 5;
// //     } else if(a == 2) {
// //         return 10;
// //     } else {
// //         throw new Error('a should be 1 or 2');
// //     }
// // }

// // function someOtherProcedure(a, b) {
// //     return someProcedure(a) + b;
// // }

// // try {
// //     console.log('my result is', someOtherProcedure(3, 3));
// // } catch(error) {
// //     console.log('I got an exception', error.message);
// // }


// // basic async explanation?
// function after1SecondPromise() {
//     return new Promise(resolve => {
//         setTimeout(resolve, 1000)
//     });
// }

// // crappy way?
// // function thing() {
// //     after1SecondPromise()
// //         .then(() => console.log('it worked'))
// //         .then(after1SecondPromise)
// //         .then(() => console.log('it worked'))
// //         .then(after1SecondPromise)
// //         .then(() => console.log('it worked'))
// //         .then(after1SecondPromise)
// //         .then(() => console.log('it worked'))
// //         .then(after1SecondPromise)
// //         .then(() => console.log('it worked'))
// //         .then(() => 42);
// // }

// // (async await) better way?
// async function thing() {
//     await after1SecondPromise();
//     console.log('it worked');
//     await after1SecondPromise();
//     console.log('it worked');
//     await after1SecondPromise();
//     console.log('it worked');
//     await after1SecondPromise();
//     console.log('it worked');
//     return 42;
// }

// thing();

