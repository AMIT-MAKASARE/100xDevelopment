
let ctr = 1;
function handleDelete(index){
    const element=document.getElementById("todo-"+index)
    element.parentNode.removeChild(element)
}


function handleAdd(){
    const inputEl=document.querySelector("input").value
    const spanEl=document.createElement("span")
    const buttonEl=document.createElement("button")
    
    spanEl.innerHTML=(inputEl)
    buttonEl.innerHTML=("delete")

    const divEl=document.createElement("div")
    divEl.appendChild(spanEl)
    divEl.appendChild(buttonEl)
    
    
    document.querySelector("body").appendChild(divEl)
}
// function handleAdd(){
//     const inputEl=document.querySelector("input") //rich to the input value
//     const value=inputEl.value //extracted value inside the value attribute

//     const newDevEl=document.createElement("div") //created the div element using js 
//     newDevEl.setAttribute("id","todo-"+ctr)  //
   
    
//     newDevEl.innerHTML="<div>"+ value +'</div> <button onclick="handleDelete('+ ctr +')">Delete</button>'
//     document.querySelector("body").appendChild(newDevEl)
//      ctr = ctr + 1;
// }




// to remove child
// function handleDelete(){
//     let dlt=document.querySelector("p")
//     let prt=dlt.parentNode
//     prt.removeChild(dlt)
// }
// handleDelete()