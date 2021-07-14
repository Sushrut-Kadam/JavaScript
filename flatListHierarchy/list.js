/**
 * Title : A linked list containing nodes with id, data, parent id and link to the next node.
 * 
 * Purpose : Defines the structure for the list containing nodes as mentioned above
 * 
 * Date : 13-07-2021
 * 
 * Modifed Date : 
 * Modified By :
 */
//--------------------------------------------------------------------------------------------

function Node(id, data, parentId, next){
    this.id = id;
    this.data = data;
    this.parentId = parentId;
    this.next = next;

    this.getId = () => this.id;
    this.getData = () => this.data;
    this.getParentId = () => this.parentId;

    this.display = () => {
        console.log(
            "id : ",this.getId(),"\t", 
            "data : ", this.getData(),"\t", 
            "parent id : ", this.getParentId()
        );
    }
}

function List(id, data){
    this.head = new Node(id, data, null, null);

    this.getHead = () => this.head;

    this.insert = (id, data, parentId) => {
        var currentNode = this.head;

        while(currentNode.next != null)
            currentNode = currentNode.next;

        currentNode.next = new Node(id, data, parentId, null);
    }

    this.display = () => {
        currentNode = this.head;

        while(currentNode != null){
            currentNode.display();
            currentNode = currentNode.next;
        }
    }
}

module.exports = {List: List}