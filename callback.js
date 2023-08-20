//normal synchronous call backs

console.log("task started");
function sum(cb) {
console.log("task is running");
cb();
}
sum(()=>console.log(name1));
console.log("task end");
const name1 = "Mouli";

/* Normal asynchronous call back in js */

console.log("task started");
function sum(cb) {
    console.log("task is running");
    setTimeout(cb,0);
}
sum(() => console.log(name2));
console.log("task end");
const name2 = "Mouli";

/* this is the present format when comeout from js to node.js*/
console.log("task started");
function sum(cb) {
    setTimeout(()=>{
        cb(null,"this is mouli")
    });
}
sum((err,data) => {
if(err){
    throw err
} else{
   console.log(data); 
}
});

/* converting this callback into promise */

function sum(cb) {
return Promise.resolve()
}
sum().then(() => console.log(name3))
const name3 = "Mouli";



