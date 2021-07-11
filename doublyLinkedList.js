function Node(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;

    this.display = () => data;
}

function doublyLinkedList(data) {
    this.head = new Node(data, null, null);
    this.tail = this.head;                  //using head without this generates error.

    this.insert = (data) => {
        var newNode = new Node(data, null, null);
        var currentNode = this.head;

        while (currentNode.next != null)
            currentNode = currentNode.next;

        newNode.prev = currentNode;
        currentNode.next = newNode;
        this.tail = currentNode.next;
        //tail = currentNode.next           //doesn't work. Need to refer tail using this.
    }

    this.delete = (data) => {
        if (this.head.data == data){
            this.head = this.head.next;
        }
        else {
            var currentNode = this.head;

            while (currentNode.next != null && currentNode.next.data != data) {
                currentNode = currentNode.next;
            }

            if (currentNode.next == null)
                return;

            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode;
            if (currentNode.next == null)
                this.tail = currentNode;
        }
    }

    this.delete2 = (data) => {
        if (this.head.data == data) {
            this.head = this.head.next;
            return;
        }
        else {
            var currentNode = this.head;

            while (currentNode != null && currentNode.data != data) {
                currentNode = currentNode.next;
            }

            if (currentNode == null)
                return;

            currentNode.prev.next = currentNode.next;

            if (currentNode.next == null)
                this.tail = currentNode.prev;
            else
                currentNode.next.prev = currentNode.prev;
        }
    }

    this.search = (data) => {
        if(this.head.data == data)
            return this.head.data;
        else{
            var currentNode = this.head;

            while(currentNode != null && currentNode.data != data){
                currentNode = currentNode.next;
            }

            if(currentNode == null)
                return null;
            
            return currentNode.data;
        }
    }

    this.display = () => {
        var currentNode = this.head;

        while (currentNode != null) {
            console.log(currentNode.display());
            currentNode = currentNode.next;
        }
    }

    this.displayReverse = () => {
        var currentNode = this.tail;

        while (currentNode != this.head) {
            console.log(currentNode.display());
            currentNode = currentNode.prev;
        }
        console.log(currentNode.display());
    }
}

var dll_list = new doublyLinkedList(1);
dll_list.insert(2);
dll_list.insert(3);
dll_list.insert(4);
dll_list.insert(5);
dll_list.insert(6);

console.log("Displaying the list : ");
dll_list.display();
console.log("\n");
console.log("Displaying the list in reverse: ");
dll_list.displayReverse();
console.log("\n");

console.log("Deleting 2 : ");
dll_list.delete(2);
console.log("Displaying the list : ");
dll_list.display();
console.log("\n");
console.log("Displaying the list in reverse: ");
dll_list.displayReverse();
console.log("\n");

console.log("Deleting 3 : ");
dll_list.delete2(3);
console.log("Displaying the list : ");
dll_list.display();
console.log("\n");
console.log("Displaying the list in reverse: ");
dll_list.displayReverse();
console.log("\n");

console.log("Deleting 1 : ");
dll_list.delete2(1);
console.log("Displaying the list : ");
dll_list.display();
console.log("\n");
console.log("Displaying the list in reverse: ");
dll_list.displayReverse();
console.log("\n");

console.log("Deleting 6 : ");
dll_list.delete2(6);
console.log("Displaying the list : ");
dll_list.display();
console.log("\n");
console.log("Displaying the list in reverse: ");
dll_list.displayReverse();
console.log("\n");

console.log("Searching 4 : ");
if(dll_list.search(4))
    console.log("found");
else
    console.log("not found");

console.log("Searching 1 : ");
if(dll_list.search(1))
    console.log("found");
else
    console.log("not found");

console.log("Searching 6 : ");
if(dll_list.search(6))
    console.log("found");
else
    console.log("not found");

console.log("Searching 5 : ");
if(dll_list.search(5))
    console.log("found");
else
    console.log("not found");

