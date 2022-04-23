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
        if(this.head==null)
        {
            this.head=node
        }
        else{
            var poniter=this.head

            while(poniter.next)
            {
                poniter=poniter.next
            }
            poniter.next=node
            this.size++
        }




    }
    printlist(){
        var pointer=this.head

        while(pointer)
        {
            console.log(pointer.data);
            pointer=pointer.next
        }

    }
    insertdata(data,index)
    {
            if(index>this.size || index<0)
            {
                console.log("invalid  position")
                return false
            }
            else{
               var node=new Node(data) 
               var pointer=this.head
               var prev=null
                var i=0
               while(i<index)
               {
                   prev=pointer
                   pointer=pointer.next
                   i++
               }

            //    prev.next=node
            //    prev=prev.next
            //    prev.next=pointer
            
            prev.next=node
            node.next=pointer

               this.size++
            }
    }

    deletenode(index)
    {
       var pointer=this.head 
       var prev=null
       var i=0

       
         
    }
}

const list=new LinkList()
list.add(10)
list.add(20)
list.add(30)
list.add(40)

list.insertdata(200,4)

list.printlist()