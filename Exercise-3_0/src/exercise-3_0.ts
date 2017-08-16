//////////////////
// 1. Fix the typescript errors
let foo: (x: number, y: number) => number;

foo = function(currentAge: number, yearsUntilOld: number) {
    let oldAge = currentAge + yearsUntilOld;
    console.log(oldAge);
    return oldAge;
};

//////////////////
//2. Declare a function named findBook that takes one argument, isbn of type string, and returns an object with a label of
//   type string and page count of type number.
//   Code answer below and run tsc:
function findBook(isbn: string): { label: string, pages: number} {
    return {
        label: 'label',
        pages: 1000
    }
}



//////////////////
//3. Assign types to the declared variables that match the assigned functions:
//   Example: let x = function(x:string) {}; 
//            becomes: let x:(x:string) => void = function(x:string) {};
let x: (x:string, y:string, z:number) => void = function(x: string, y:string, z:number) { 
    return {
        name: x + y,
        ranking: z
    }
};

let y: () => number[] = function() {
    let randomNumbers = [];

    for (let i = 0; i < 20; i++) {
        randomNumbers.push(Math.floor(Math.random() * 10));
    }
    
    return randomNumbers;
};

let z: (x:boolean, y: { x: string, y: string }) => void = function(x: boolean, y: { x: string, y: string}) { 
    if (x) {
        console.log(y.x + ' ' + y.y);
    }
};

let xx: (x: string[]) => string[] = function(names: string[]) {
    return names.filter((name) => name.indexOf('A') !== -1 );
};


//////////////////
//4. Uncomment out the function baz. Why is this function declaration causing a typescript error?  How can you fix it?
function baz(a: string, c: number, b?: string) {

}

//////////////////
//5.  Start the server if it is not already running by typing npm start in the root.  The object xyz below returns a function when
//    setup is called that alerts the name of xyz.  Open up a browser and navigate to this exercise and click the button
//    'runXyzApp' to see that it is currently failing.  Why is it failing?  Make some simple changes to the code 
//    utilizing arrow function syntax to that this alert properly shows 'xyz';
var xyz = {
    name: 'xyz',
    setup: function() {
        return () => alert(this.name);
    }
};

let xyzApp = xyz.setup();

//////////////////
//6. filterMyCookies should return an array with all cookies that have the string 'chocolate' in them. 
//   Unfortunately, it is currently broken and only returning an empty array!  
//   What is wrong here?  Fix this code!  In a browser, open up the browser cosole to view the console output and click
//   on the filterCookies button.
let filterMyCookies = (cookies: string[]) => cookies.filter((cookie) => { return cookie.indexOf('chocolate') !== -1 } ) ;
let cookies = ['chocolate chip', 'peanut butter', 'sugar', 'chocolate crunch'];

var filterCookies = function() {
    console.log(filterMyCookies(cookies));
};

//////////////////
//7.  myOverloadedFunc is being called with different params and returning different things depending on what it is 
//    called with.  Write appropriate function types using function overloading so that all the functions pass the
//    typescript compiler.  Calling myOverloadedFunc with no arugments has already been done for you. Uncomment
//    the variables results2, results3, and results4 below to begin.
function myOverloadedFunc(): boolean;
function myOverloadedFunc(x:string): { label: string };
function myOverloadedFunc(x:number): number;
function myOverloadedFunc(x:string, y:number): string;
function myOverloadedFunc(x: any = false, y: number = 0): any {
    if (x && y) {
        if (typeof x === 'string' && typeof y === 'number') {
            return x + y;
        } else {
            return true;
        }
    } else if (x){
        if (typeof x === 'number') {
            return x + 200;
        } else {
            return {
                label: x
            }
        }
    } else {
        return true;
    }
}

let results1: boolean = myOverloadedFunc();
let results2: { label:string } = myOverloadedFunc('red');
let results3: number = myOverloadedFunc(100);
let results4: string = myOverloadedFunc('red', 100);
