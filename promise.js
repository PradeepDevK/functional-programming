/***
 * Promises are used to handle asynchronous operations in JavaScript.
 * Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.
 * Multiple callback functions would create callback hell that leads to unmanageable code.
 * Events were not good at handling asynchronous operations.
 * 
 * Benefits of Promises,
 * Improves Code Readability
 * Better handling of asynchronous operations
 * Better flow of control definition in asynchronous logic
 * Better Error Handling
 * 
 * A Promise has four states,
 * fulfilled: Action related to the promise succeeded
 * rejected: Action related to the promise failed
 * pending: Promise is still pending i.e not fulfilled or rejected yet
 * settled: Promise has fulfilled or rejected
 */

let promise = new Promise(function (resolve, reject) {
    const x = "pradeep";
    const y = "pradeep"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
then(function () {
    console.log('Success --->');
}).
catch(function () {
    console.log('Some error has occured');
});

/**
 * Promise Consumers
 * then() is invoked when a promise is either resolved or rejected.
 */
promise = new Promise(function (resolve, reject) {
    resolve('Success ----> End');
})

promise
    .then(function (successMessage) {
        //success handler function is invoked 
        console.log(successMessage);
    }, function (errorMessage) {
        console.log(errorMessage);
    });

/**
 * catch () is invoked when a promise is either rejected or some error has occured in execution.
 */
promise = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})

promise
    .then(function (successMessage) {
        console.log(successMessage);
    }, function (errorMessage) {
        //error handler function is invoked 
        console.log(errorMessage);
    })

//example with cathc()
promise = new Promise(function (resolve, reject) {
    reject('Promise Rejected (catch())')
})

promise
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        //error handler function is invoked 
        console.log(errorMessage);
    });

//Promises are used for asynchronous handling of events.
//Promises are used to handle asynchronous http requests.