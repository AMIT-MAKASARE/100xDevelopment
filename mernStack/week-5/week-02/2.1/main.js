const { log } = require("console")
const fs=require("fs")

// sync function 
const data1=fs.readFileSync('a.txt',"utf-8")
console.log(data1)

const data2=fs.readFileSync('b.txt' ,"utf-8")
console.log(data2)


// async fuction 
function read(err,data){
    console.log(data);
    
}

fs.readFile('a.txt',"utf-8",read)
fs.readFile("b.txt", "utf-8", read);

console.log("done");

// another async fuction using setTimeout() function

function timeout(){
    console.log("time out function");
    
}
console.log("hello its 1");

setTimeout(timeout,5000)
console.log("hello its 2");
