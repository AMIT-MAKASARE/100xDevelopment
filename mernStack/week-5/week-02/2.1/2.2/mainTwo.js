// functional argument => a function that passsed a value to another function

function greet(name){
    return `hello, ${name}`;
}

function displyName(func,name){
    console.log(func(name));
    
}
displyName(greet,"amit from functional argument")


// call back  =>  function passed as an argument to another function

function print(name,display){
    console.log(`hello,${name}`)
    display()
}
 

// display() function  passed as argument to print()
function display(){
    console.log("byee");   
    
}

print("amit",display);

