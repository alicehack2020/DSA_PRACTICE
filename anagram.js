var str=["cat", "dog", "tac", "god", "act"]
var obj1={}
var list2=[]
var list3=[]

for(var i=0;i<str.length;i++)
{
    var ans=str[i]
    ans=ans.replace(/\s/g,'')
    ans=ans.split('').sort().join("")

    if(obj1[ans]==undefined)
    {
        obj1[ans]=[str[i]]
    }
    else{
        obj1[ans].push(str[i]) 
    }
       
}

for(var key in obj1)
{
    list3.push(obj1[key])
}

console.log(list3)
 

 
 