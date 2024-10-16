// A-1 tried passing the string

// function sum(a,b){
//     return a+b
// }
// console.log(sum(2,"5"));


//   A-2 user can vote or not fuction
// function canVote(age) {
//   if (age > 18) {
//     console.log("user can vote");
//   } else {
//     console.log("cannot vote");
//   }
// }
// canVote(19);

// array and object basic

// function greet(){
//     console.log("hii its"+ user.name+"and he is " + user.role);
    
// }
// let user={
//     name:"amit",
//     role:"mern stack developer"
// }
// greet(user)



// create a function that takes an array of Object as an input,and return the users whoes age>18 and male

function assingt(arr){
    let arr2=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i].gender === "male" && arr[i].age>18){
            arr2.push(arr[i])
        }
    }
    return arr2
}

const user = [
  {
    name: "amit",
    age: 22,
    gender: "male"
  },
  {
    name: "priya",
    age: 22,
    gender: "female"
  },
  {
    name: "raj",
    age: 12,
    gender: "male"
  }
];

console.log(assingt(user));

