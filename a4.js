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
    //add

    add(data)
    {
        const node=new Node(data)

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
            this.size++
        }
    }

    printlist()
    {
        var pointer=this.head
        var index=0
        while(pointer)
        {
            console.log(pointer.data,index++);
            pointer=pointer.next
        }

    }

    insert(data,index)
    {
        if(index>this.size || index<0 && this.size)
        {
            console.log("invalid position")
            return false
        }
        else{
            var pointer=this.head
            var prev=null
            var i=0
            var node=new Node(data)
            while(i<index)
            {
               prev=pointer
               pointer=pointer.next  
               i++   
            }

            prev.next=node
            prev=prev.next
            prev.next=pointer

            this.size++


        }
    }

     
    //insert at position
    //size

}

const link=new LinkList()
console.log(link);
link.add(20)
link.add(20)
link.add(40)
link.add(20)

link.insert(1000,2)
 
link.printlist()