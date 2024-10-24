//exercice 1
/*
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved");
    }, 2000);
});

myPromise.then(result => {
    console.log(result);
})

*/
//exercice 2
/*
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First promise resolved");
    }, 2000);
});

firstPromise.then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second promise resolved");
        }, 2000);
    });
}).then(result => {
    console.log(result);
}); */

//exercice 3


/*
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First promise resolved");
    }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second promise resolved");
    }, 2000);
});

Promise.all([firstPromise, secondPromise]).then(results => {
    results.forEach(result => console.log(result));
}).catch(error => {
    console.error(error);
});

*/




//exercice 4

/*
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First promise resolved");
    }, 2000);
});

firstPromise.await(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("second promised resolved")
        }, 2000)
    })
    }).then(result => {
    console.log(result);
});
*/

// exercice 5

/*
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First promise resolved");
    }, 2000);
});
const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second promise resolved");
    }, 2000);
});

Promise.all([firstPromise, secondPromise])
    .then(results => {
        results.forEach(result => console.log(result));
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
*/

//exercice 6


