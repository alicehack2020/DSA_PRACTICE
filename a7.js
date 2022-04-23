class Node
{
    constructor(data)
    {
        this.data=data
        this.next=null
    }
}

class LinkList{
    constructor()
    {
        this.head=null
        this.size=0
    }

    add(data)
    {
      var node=new Node(data)

      //console.log(node);
      if(this.head==null)
      {
          this.head=node
      }
      else{
          var pointer=this.head

          while(pointer.next)
          {
             pointer=pointer.next
          }
          pointer.next=node

      }

      this.size++


      
      

    }

    printele()
    {
       // var pointer=this.head
       // this.head=pointer
         console.log(this.head); 
        // while(pointer)
        // {
        //     console.log(pointer.data)
        //     pointer=pointer.next 
        // }
      


    }

    positioninsert()
    {

    }
}


//var node=new Node(10)
var list=new LinkList()
list.add(10)
list.add(199990)
list.add(60)
list.add(40)
list.add(20)
list.add(70)

//console.log(list);







list.printele()
//console.log(list)
 