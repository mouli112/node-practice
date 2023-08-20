/*  
CORE MODULES

1. File System  - fs

*/
var fs = require("fs");
fs.readFile("test.txt","utf-8", (err,data) =>{
    console.log(data);
});