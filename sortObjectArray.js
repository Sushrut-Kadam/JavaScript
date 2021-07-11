/**
 * Title : To sort objects array w.r.t. a particular property
 */

//---------------------------------------------------------------------------------

const printArray = (args) => { 
    for(const obj in args)             //here obj is treated as a key(index) for the employees array
        console.log(args[obj]);        //console.log(employees.obj) return "undefined"

    console.log("\n");
}

//---------------------------------------------------------------------------------

function sortByNames(employees){
    employees.sort((element1, element2) => {
        const nameElement1 = element1.name.toLowerCase();
        const nameElement2 = element2.name.toLowerCase();
    
        if(nameElement1 > nameElement2)
            return 1;
        else if(nameElement1 < nameElement2)
                return -1;
             else
                return 0;
    });
}

function sortByDate(employees){
    employees.sort((element1, element2) => {
        const dateElement1 = new Date(element1.hireDate);
        const dateElement2 = new Date(element2.hireDate);
    
        return dateElement1-dateElement2;
    });
}

function sortBySalary(employees){
    employees.sort((element1, element2) => {
        return element1.salary-element2.salary;
    });
}

//----------------------------------------------------------------------------

let employees = [

    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
    
];

console.log("Orignal Array : ");
printArray(employees);

console.log("Sorted according to Names : ");
sortByNames(employees);
printArray(employees);

console.log("Sorted according to Salary : ");
sortBySalary(employees);
printArray(employees);

console.log("Sorted according to Hire-Date : ");
sortByDate(employees);
printArray(employees);
