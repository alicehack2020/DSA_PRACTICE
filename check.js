//ATUL SHARMA9:01 PM
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// IM Connect for Atul Sharma and Mangesh Pandit

var num=[2,7,11,15]
var target = 9
var ans=[]
var final=[]

 var a=sum()
 if(a==true)
 {
     for(var i=0;i<num.length;i++)
     {
        if(a[0]==num[i])
        {
            final.push(i)
            break
        }
     }

     for(var i=0;i<num.length;i++)
     {
        if(a[1]==num[i])
        {
            final.push(i)
            break
        }
     }

     console.log(final)

 }
 else{
    console.log("not found"); 
 }



function sum()
{
     
    var old=num
    num=num.sort((a,b)=>{
      return a-b  
    })
    var l=0
    var r=num.length-1

    
    

    var obj={}
    var new_str=[]
    for(var i=0;i<num.length;i++)
    {
        if(obj[num[i]]==undefined)
        {
            obj[num[i]]=1 
        }
        else{
            obj[num[i]]++

            var  j=[]
            j.push(num[i])
            new_str.push(j)
        }
    }

  







    while(l<r)
    {
        var sum=num[l]+num[r]
        if(sum==target)
        {
            ans.push(num[l])
            ans.push(num[r])
            return true
        }
        else if(sum>target)
        {
            r--
        }
        else if(sum<target)
        {
            l++
        }


    }

    return false


}  

// function sum()
// {
//     for(var i=0;i<num.length;i++)
//     {
//         for(var j=i+1;j<num.length;i++)
//         {
//             var sum=num[i]+num[j]
//             if(sum==target)
//             {
//                 ans.push(i)
//                 ans.push(j)
                
//                 return ans   
//             }
//         }
//     }
//     return ans
// }







