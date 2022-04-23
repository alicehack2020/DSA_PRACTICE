class Node{
    constructor(ele) {
        this.ele=ele
        this.next=null
    }
}

class LinkList{
    constructor()
    {
        this.head=null
        this.size=0
    }


    add(ele){
     var node=new Node(ele)
     if(!this.head)
     {
         this.head=node
     }
     else{
        var current=this.head
        while(current.next)
        {
            current=current.next
        }
        current.next=node
     }

     this.size++
    }

    printele()
    {
        var current=this.head
        var index=0
        while(current)
        {
            console.log(current.ele,index++);
            current=current.next;
        }
    }
}

var list=new LinkList()
list.add(10)
list.add(20)
list.add(30)
list.add(30)
list.add(30)
list.add(30)
list.add(30)
list.add(30)
 
list.printele()