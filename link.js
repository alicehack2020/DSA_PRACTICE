class Node{
    constructor(element)
    {
        this.element=element,
        this.next=null
    }
}

class LinkList{
    constructor()
    {
        this.head=null
        this.size=0
    }



    add(element)
    {
        var node=new Node(element)
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
            while(current)
            {
                console.log(current.element);
                current=current.next
            }
    }
}

var list=new LinkList()
list.add(90)
list.add(10)
list.add(30)
list.add(10)
list.add(10)
list.add(50)
list.add(80)


list.printele()