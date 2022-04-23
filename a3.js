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

    add(data){
    
        var node=new Node(data)
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

    printlist()
    {
        var pointer=this.head

        while(pointer)
        {
            console.log(pointer.data);
            pointer=pointer.next
        }

    }


//insert at position


    insertAt(data,index)
    {
        if(index>this.size || index<0 && this.size)
        { 
            console.log("invalid input")
            return false
        }
        else{
            var node=new Node(data)
            console.log(node)
            var pointer=this.head
            var prev=null


            if(index==0)
            {
                node.next=pointer
                this.head=node 
            }
        }
    }
    

}

const link=new LinkList()
link.add(10)
link.add(20)
 


link.insertAt(600,0)

link.printlist()
 


