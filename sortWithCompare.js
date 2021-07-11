
const print = (...args) => { console.log(args.join(" ")); }

//--------------------------------------------------------------------------------------------------

function sortNumbers(numberArray){
    print("Orignal Arary :",numberArray.join(" "));

    numberArray.sort((item1, item2) => {return item1-item2});        //arrow function for compare
    print("Ascending Sort :",numberArray.join(" "));
    print("\n");  

    numberArray.sort((item1, item2) => {return item2-item1});        //arrow function for compare
    print("Descending Sort :",numberArray.join(" "));
    print("\n");  
}

function sortStrings(stringArray){
    print("Orignal array :",stringArray.join(" "));

    stringArray.sort();
    print("Default sort :",stringArray.join(" "));
    print("\n");

    stringArray.sort((string1, string2, direction="asc") => {
        return compareStrings(string1, string2, direction);
    });
    print("Ascending sort :",stringArray.join(" "))

    stringArray.sort((string1, string2, direction="desc") => {
        return compareStrings(string1, string2, direction);
    });
    print("Descending sort :",stringArray.join(" "))
    print("\n");

}

function compareStrings(string1, string2, direction){
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    
    // print(string1," ",string2," ");

    var swtichVar = (direction=="asc") ? 1 : 0;

    switch(swtichVar){
        case 1 : if(string1 > string2)
                    return 1;
                 else if(string1 < string2)
                        return -1;
                    else
                        return 0; 
                 break;

        case 0 : if(string1 < string2)
                    return 1;
                 else if(string1 > string2)
                    return -1;
                 else
                    return 0; 
                 break;

        default: print("Incorrect Choice");
    }
}

function debug(){
    print(compareStrings("a", "b"));
    print(compareStrings("b", "a"));
    print(compareStrings("a", "a"));
    print(compareStrings("A", "a"));
    print(compareStrings("a", "A"));
    print(compareStrings("B", "a"));

}

//------------------------------------MAIN---------------------------------------------

var numbers = [2,5,1,7,9,4,6,8];
sortNumbers(numbers);

var fruits = ["orange", "apple", "banana", "berry", "watermelon", "kiwi"];
sortStrings(fruits);

var fruitsMixedCase = ["Orange", "aPple", "banana", "BERRY", "WATermelon", "kiWI"];
sortStrings(fruitsMixedCase);




//--------------------------------------------------------------------------------------------------------------------------
/**
 * Array.sort() function by default sorts element as strings.
 * It converts the element being operated on into strings and then sorts them accordingly.
 * So the array 1,22,3,14 will be sorted as 1,14,22,3 which is incorrect.
 * So to sort them in proper order, we will have to add a compare function in as an argument to the sort method.
 * Based on the condition in the compare function, the elements will be sorted accordingly.
 * If the compare function returns a '1' then the two items will be swapped otherwise they will keep their positions.
 */