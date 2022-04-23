class Node{
    constructor(data)
    {
        this.data=data
        this.next=null
    }
}

class Linklist{
    constructor()
    {
        this.head=null
        this.size=0
    }
    //add to list
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
            this.size++
        }
    }


    printele(head){
        var pointer=this.head
        while(pointer)
        {
            console.log(pointer.data);
            pointer=pointer.next
        }

        


    }

    insertele(data,index){
        var node=new Node(data)
        var pointer=this.head
        var prev=null
        var i=0 

        if(index>this.size || index<0){
           console.log("invalid position")
            return false
        }
        else if(index==0)
        {
            node.next=pointer
            this.head=node
        }
        else if(index==this.size){
            
            while(pointer.next)
            {
                pointer=pointer.next
            }
            pointer.next=node
            this.size++
        }
        else{
           
            while(i<index)
            {
                 prev=pointer
                 pointer=pointer.next
                 i++
            }
             prev.next=node
            node.next=pointer
            this.size++
        }
    }



    deleteele(data){

        var pointer=this.head
        var prev=null

        while(pointer)
        {
            if(pointer.data=data)
            {
                if(prev==null){
                    this.head=pointer.next
                }
                else{
                    if(pointer.next==null)
                    {
                        prev.next=null
                    } 
                    else{
                        prev.next=pointer.next

                    }
                }
                this.size--
                return true
            }
            prev=pointer
            pointer=pointer.next
        }
        

        



    }
    
    
    
    sizeoflist(){}
    isEmpty(){}
}

var list=new Linklist()
list.add(100)
list.add(300)
list.add(200)
 
//list.insertele(19999900,2)

list.deleteele(200)
list.printele()