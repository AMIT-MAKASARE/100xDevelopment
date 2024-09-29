const express=require('express')

const app=express();

// function isOld(age){
//     if(age>18){
//         return true
//     }else{
//         return false
//     }
// }

// app.get("/rideOne",(req,res)=>{
//     if(isOld(req.query.age)){
//         res.json({
//         mes: "ride one is here",
//         });
//     }
//     else{
//        res.status(404).json({
//          mes:"sorry ur underage"
//        })
//     }
    
// })

// app.get("/ridetwo", (req, res) => {
//   if (isOld(req.query.age)) {
//     res.json({
//       mes: "ride one is here",
//     });
//   } else {
//     res.status(404).json({
//       mes: "sorry ur underage",
//     });
//   }
// });   

// this is the one way to create the ticket cheaker

function isOldByMiddleware(req,res,next){
    let age=req.query.age;
    if(age>18){
       next();
    }else{
        res.json({
          mes: "sorry yr underage",
        });
    }
}

app.get("/rideOne",isOldByMiddleware,(req,res)=>{
   res.json({
         mes:"ride one yoo"
       })
    }
)

app.get("/ridetwo",isOldByMiddleware,(req, res) => {
    res.json({
      mes: "ride two yoo",
    });
  }
); 


app.listen(4000)