const express=require ("express")
const app=express()

app.get("/sum",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
      answer: a+b
    })
    console.log(answer);
    
})

app.get("/sub",function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans:a-b
    })
    
    

})

app.get("/divide",function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans:a/b
    })
})

// app.get("/mul",function(req,res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b)

//     res.json({
//         ans:a+b
//     })
// })

app.get("/mul/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    ans: a * b,
  });
});
//  this is how we can multiply from this code "localhost:5000/mul/20/30" it means 20*30

 
const port=5000;
app.listen(port,()=>{
    console.log("server started at"+ port);
    
})