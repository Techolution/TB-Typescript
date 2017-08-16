//////////////////
// 1. Declare a new interface named ICar.
//    It should have the following required properties: hybrid ( boolean ), numberOfDoors, maxSpeed.  
//    It should have the following optional property: color.
//
//    Delcare a variable named myCar to be of type ICar and set it to an object where hybrid = true;
//    Update the ICar interface so that the hybrid property cannot be changed after it is set the first time. 
//
interface ICar {
    color?: string;
    readonly hybrid: boolean;
    maxSpeed: number;
    numberOfDoors: number;
}

var myCar: ICar = {
    hybrid: true,
    maxSpeed: 1000,
    numberOfDoors: 4
};

//////////////////
// 2.  Declare a new interface name IMusician.
//     It should have a property names songs which is an array of song titles.
//     It should have a method called play that takes a song title and returns 
//     true if the song title is found in its songs array or false if it is not.
//
interface IMusician {
    songs: string[];
    play(songTitle: string): boolean;
}

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

let employeeHashMap:  { [ lastName: string]: Employee};

employeeHashMap = {
    "Johnson": {
        age: 30,
        firstName: "Alex",
        lastName: "Johonson"
    },
    "Smith": {
        age: 34,
        firstName: "John",
        lastName: "Smith"
    },
    "Dinesh": {
        age: 20,
        firstName: "Patel",
        lastName: "Dinesh"
    }
}

//////////////////
// 4.  Below is a simple variable names x with 3 properties set. Declcare two interfaces: ISquare, with 
//     a width and height and an ICube which extends ISquare and adds a length property. Set x to be of type ICube.

interface ISquare {
    height: number;
    width: number;
}

interface ICube extends ISquare {
    length: number;
}

let x: ICube;

x.width = 20;
x.height = 10;
x.length = 10;