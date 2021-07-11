/**
 * Title : Peform add, subtract, multiply and division of complex numbers.
 */
//-------------------------------------------------------------------------------

function complexNumber(real, imaginary){
    this.real = real;
    this.imaginary = imaginary;

    this.getReal = () => {
        return real;
    }

    this.getImaginary = () => {
        return imaginary;
    }

    this.display = () => {
        /*
            Alternate returns :  
                return (`${real} + ${imaginary}i`);
                return (real, "+", imaginary, "i");              //this doesn't work
        */
        
        if(imaginary > 0)
            return (real+"+"+imaginary+"i");
        else
            return (real+""+imaginary+"i");
    }
};

function operationComplexNumber(number_1, number_2, operation){
    var realNumber1 = number_1.getReal();
    var realNumber2 = number_2.getReal(); 
    
    var imaginaryNumber1 = number_1.getImaginary();
    var imaginaryNumber2 = number_2.getImaginary();

    var real, imaginary;
    
    switch (operation) {
        case '+':
            real = realNumber1 + realNumber2;
            imaginary = imaginaryNumber1 + imaginaryNumber2;
            return new complexNumber(real, imaginary);
        
        case '-':
            real = realNumber1 - realNumber2;
            imaginary = imaginaryNumber1 - imaginaryNumber2;
            return new complexNumber(real, imaginary);

        case '*':
            real = (realNumber1*realNumber2) - (imaginaryNumber1*imaginaryNumber2);
            imaginary = (realNumber2*imaginaryNumber1) + (realNumber1*imaginaryNumber2);
            return new complexNumber(real, imaginary);
    
        case '/':
            var denominator = (Math.pow(realNumber2, 2) + Math.pow(imaginaryNumber2, 2));
            real = ((realNumber1*realNumber2) + (imaginaryNumber1*imaginaryNumber2))/denominator;
            imaginary = ((realNumber2*imaginaryNumber1) - (realNumber1*imaginaryNumber2))/denominator;
            return new complexNumber(real, imaginary);
    
        default:
            return("Incorrect Choice");
    }
}

var addTwoComplexNumbers = (number_1, number_2) => operationComplexNumber(number_1, number_2, "+");
var subtractTwoComplexNumbers = (number_1, number_2) => operationComplexNumber(number_1, number_2, "-");
var multiplyTwoComplexNumbers = (number_1, number_2) => operationComplexNumber(number_1, number_2, "*");
var divideTwoComplexNumbers = (number_1, number_2) => operationComplexNumber(number_1, number_2, "/");

//--------------------------------------------------------------------------------

var firstNumber = new complexNumber(3,4);
console.log(firstNumber.display());

var secondNumber = new complexNumber(5,7);
console.log(secondNumber.display());

console.log("Addition :", addTwoComplexNumbers(firstNumber, secondNumber).display());
console.log("Subtraction :", subtractTwoComplexNumbers(firstNumber, secondNumber).display());
console.log("Multiplication :", multiplyTwoComplexNumbers(firstNumber, secondNumber).display());
console.log("Division :", divideTwoComplexNumbers(firstNumber, secondNumber).display());