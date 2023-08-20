const promise = new Promise((resolve,reject)=>{
    console.log("async task execution");
    if(true){
        const person = {name : "mouli"}
        resolve(person);
    }else{
        const error = {errCode:"1001"}
        reject();
    }
})
promise.then(
    (val)=>{console.log(val)})
    .catch((err) => console.log(err))
    .finally(()=>console.log("clean up"));
    
// function ms(cb) {
//     return Promise.resolve();
// }
// ms().then(()=>console.log("execution completed"));


// const makeApiCall = (time) => {
//     return () => new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("This API executed in: " + time);
//         }, time);
//     });
// };
// let multiApiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];
// Promise.all(multiApiCall).then((values)=>{
//     console.log(values);
// })
// Promise.race(multiApiCall).then((values) => {
//     console.log(values);
// })
// (async function () {
//     for (let request of apiRequests){
//         console.log(await request());
//     }
// })();

