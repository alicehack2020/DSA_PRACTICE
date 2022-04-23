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
            var cur=this.head
            
            while(cur.next)
            {
                cur=cur.next
            }
            cur.next=node
        }

        

        this.size++

    }

    printlist()
    {
        var cur=this.head
         
        while(cur)
        {
            console.log(cur.data);
            cur=cur.next
        }
         
    }



}

const list=new LinkList()
 
list.add(10)
list.add(10)
list.add(10)
list.add(10)
list.add(10)
list.add(10)
list.add(10)
list.add(10)
list.add(10)
list.add(10)

list.printlist()
 
 
 