class Node{
    constructor(ele)
    {
        this.ele=ele
        this.next=null
    }
}


class Linklist{
    constructor()
    {
        this.head=null
        this.size=0
    }
    add(ele)
    {
        var node=new Node(ele)

        if(!this.head)
        {
            this.head=node
        }
        else{
            var current=this.head
            while(current.next)
            {
                current.next=next
            }
            current.next=node
        }

        this.size++

    }

}

var list=new Linklist()
list.add(10)
list.add(20)
list.add(40)
console.log(list);