var nameString = "Jerry Tom";

function reverseString(nameString, resultString){
    for(var currentIndex = nameString.length-1; currentIndex>=0; currentIndex--){
        resultString += nameString[currentIndex];
    }    
    return resultString;
}

console.log(nameString);
console.log(reverseString(nameString, ""));
