// let add=document.getElementById("add").addEventListener("click",inserts())


const inserts=()=>{

    
    var data=JSON.parse(localStorage.getItem("list"))||[] 
    
    let notes=document.getElementById("notes").value

    data.push(notes)
    

    localStorage.setItem("list",JSON.stringify(data))



     var data=JSON.parse(localStorage.getItem("list"))


     let lists=document.getElementById("lists") 
     lists.innerText=""
    data.forEach(element => {

        var notessection=document.createElement("p")
        notessection.innerText=element

        lists.append(notessection)
        
    });
 



 
}