//////////////////
// 1. Declare a new interface named ICar.
//    It should have the following required properties: hybrid ( boolean ), numberOfDoors, maxSpeed.  
//    It should have the following optional property: color.
//
//    Delcare a variable named myCar to be of type ICar and set it to an object where hybrid = true;
//    Update the ICar interface so that the hybrid property cannot be changed after it is set the first time. 
//

//////////////////
// 2.  Declare a new interface name IMusician.
//     It should have a property names songs which is an array of song titles.
//     It should have a method called play that takes a song title and returns 
//     true if the song title is found in its songs array or false if it is not.
//

//////////////////
// 3. Below is a variable employeeHashMap.  It should be a hash with key value pairs where the
//    key is last name of an employee and the value is an employee object as defined in the IEmployee interface. 
//    
//   Define and EmployeeMap interface to be implemented by the employeeHasMap and add several employees to it. 
interface Employee {
    age: number;
    firstName: string;
    lastName: string;
}

let employeeHashMap;

//////////////////
// 4.  Below is a simple variable names x with 3 properties set. Declcare two interfaces: ISquare, with 
//     a width and height and an ICube which extends ISquare and adds a length property. Set x to be of type ICube.

let x;

x.width = 20;
x.height = 10;
x.length = 10;