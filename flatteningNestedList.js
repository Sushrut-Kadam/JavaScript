function Node(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;

    this.display = () => this.data;
}

function doublyLinkedList(data) {
    this.head = new Node(data, null, null);
    this.tail = this.head;

    this.getHead = () => this.head;
    this.getTail = () => this.tail;

    this.setHead = (head) => {this.head = head;} 
    this.setTail = (tail) => {this.tail = tail;} 

    this.insert = (data) => {
        var newNode = new Node(data, null, null);
        var currentNode = this.getHead();

        while (currentNode.next != null)
            currentNode = currentNode.next;

        newNode.prev = currentNode;
        currentNode.next = newNode;
        this.setTail(currentNode.next);
    }

    this.delete = (data) => {
        if (this.getHead().data == data) {
            this.setHead(this.getHead().next);
            return;
        }
        else {
            var currentNode = this.getHead();

            while (currentNode != null && currentNode.data != data) {
                currentNode = currentNode.next;
            }

            if (currentNode == null)
                return;

            currentNode.prev.next = currentNode.next;

            if (currentNode.next == null)
                this.setTail(currentNode.prev);
            else
                currentNode.next.prev = currentNode.prev;
        }
    }

    this.search = (data) => {
        if (this.getHead().data == data)
            return this.getHead().data;
        else {
            var currentNode = this.getHead();

            while (currentNode != null && currentNode.data != data) {
                currentNode = currentNode.next;
            }

            if (currentNode == null)
                return null;

            return currentNode.data;
        }
    }

    this.display = () => {
        var currentNode = this.getHead();

        while (currentNode != null) {
            console.log(currentNode.display());
            currentNode = currentNode.next;
        }
    }
}

//---------------------------------------------------------------------------------------

function flattenList(dll_list) {
    var currentNode = dll_list.getHead();

    while (currentNode != null && (!isNaN(currentNode.data))) {
        // console.log("Inside loop current : ", typeof (currentNode.data));
        currentNode = currentNode.next;
    }

    if (currentNode == null)
        return;

    /*
        currentNode.display();
        console.log("I reached here !");
        console.log("type  : ", typeof(currentNode));
        console.log("type  : ", typeof(currentNode.data));
        currentNode.data.display();
    */
    
    var sublist = currentNode.data;
     
    /*
        sublist.display();
        console.log("sublist type : ", typeof(sublist));
        console.log("sublist data : ", sublist.data);
        console.log("sublist head : ", sublist.getHead());
        console.log("sublist tail : ", sublist.getTail());
    */

    sublist.getTail().next = currentNode.next;
    if(currentNode.next != null)
        currentNode.next.prev = sublist.getTail();

    currentNode.data = sublist.getHead().data;

    currentNode.next = sublist.getHead().next;
    sublist.getHead().prev = currentNode;

    flattenList(dll_list);    
}

//---------------------------------------------------------------------------------------

var dll_list = new doublyLinkedList(11);
// dll_list.display();
// console.log("\n");

var sub_dll_list = new doublyLinkedList(21);
sub_dll_list.insert(22);
sub_dll_list.insert(23);
sub_dll_list.insert(24);
// sub_dll_list.display();
// console.log("\n")

var sub_dll_list_level2 = new doublyLinkedList(31);
sub_dll_list_level2.insert(32);
sub_dll_list_level2.insert(33);
// sub_dll_list_level2.display();
// console.log("\n")

var sub_dll_list_level3 = new doublyLinkedList(41);
// sub_dll_list_level3.display();
// console.log("\n")

sub_dll_list_level2.insert(sub_dll_list_level3);
sub_dll_list.insert(sub_dll_list_level2);
dll_list.insert(sub_dll_list);
dll_list.insert(13);

console.log("Before flattening : ")
dll_list.display();
console.log("\n")

console.log("After flattening : ")
flattenList(dll_list);
dll_list.display();
console.log("\n")
