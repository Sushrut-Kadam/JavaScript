/**
 * Title : Displaying the hierarchy of nodes in a list
 * 
 * Purpose : defines the funtion which returns all the children and grandchildren of a node
 * 
 * Date : 13-07-2021
 * 
 * Modifed Date : 
 * Modified By :
 */
//--------------------------------------------------------------------------------------------

const list = require("./list");     //list is the reference to the imported file

function displayHierarchy(id, list){
    var ids = [id];
    var resultList = [];

    var currentNode = list.getHead();

    while(currentNode != null){
        if(ids.includes(currentNode.getId()) || ids.includes(currentNode.getParentId())){
            ids.push(currentNode.getId());
            resultList.push(currentNode);

            // console.log(currentNode.display());
        }
        currentNode = currentNode.next;
    }
    return resultList;
}

var linkedList = new list.List(1, 100);     //List is the constuctor in the imported list file
// linkedList.display();

linkedList.insert(2,200,1);
linkedList.insert(3,300,1);
linkedList.insert(4,400,2);
linkedList.insert(5,500,3);
linkedList.insert(6,600,3);
linkedList.insert(7,700,3);
linkedList.insert(8,800,4);
// linkedList.display();

const id = 2;

console.log("Displaying hierachy of node with id", id, ":");

var result = displayHierarchy(id, linkedList);
result.forEach(element => {
    element.display() ;
});
