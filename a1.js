class Node{
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



    add(data){
        var node=new Node(data)
        //var current=this.head
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
}


var link=new LinkList()
link.add(10)
link.add(30)
link.add(30)
link.add(30)
link.add(30)
link.add(30)
link.add(30)
link.add(30)


console.log(link);