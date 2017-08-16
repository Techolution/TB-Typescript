/////////////////
//1. Set the type on myFunc to a generic type that matches the bizBaz function assigned to it.
function bizBaz<T>(arg: T): T {
    return arg;
}

let myFunc: <T>(x:T) => T = bizBaz;

/////////////////
//2. Add one method named process to the interface definition IFoo that takes an arg of generic type U and returns void;
interface IFoo {
    process<U>(x:U): void
}

/////////////////
//3. Something is wrong with the ICustom interface definition.  Uncomment the code and fix the error. 
interface ICustom<T> {
    list: Array<T>
}

let customList: ICustom<string> = {
    list: ['z', 'q']
};

/////////////////
//4. Create a class called DataUtility that defines a generic DataType that can be seen by the entire class. 
//   Instantiate two instances of it, each using a different type for DataType.
class DataUtility<T> {

    specialProperty: T;

    constructor(specialProperty) {
        this.specialProperty = specialProperty;
    }
}

let x = new DataUtility<number>(100);
let y = new DataUtility<string>("Hello");

x.specialProperty; // 100 
y.specialProperty; // Hello