///////////////
// 1.  The Cat class needs to implement the IAnimal interface.  The only problem is that it is not yet defined!
//     run tsc at the command line in the Exercise-4_2 directory and note the typescript error. 
//     
//     Create another .ts file in this directory that exports an IAnimal interface then import that interfce into 
//     this file in order to get rid of the typescript compiler errors.
interface IAnimal {}

class Cat implements IAnimal {

}

///////////////
// 2.  Open up the tsconfig.json file in this exercise directory and note the configuration for: compilerOptions.module: "commonjs".
//     commonjs is a well-known module pattern.  javascript code writtne in this module pattern can be loaded by 
//     many js loaders including the nodejs loader and webpack.  Take a look at the js code that has been generated. 
//     Because the current value is commonjs we see a line that looks like this: exports.Greeter = Greeter;  This "exports" 
//     
//     Remove the export keyword below so that the Greeter class is only local to this file and compile again and look at the
//     code again. You will notice that exports.Greeter is gone!  This makes sense since you removed the exports keyword. 
//     Put exports back.  Now change compilerOptions.module = "amd" in the tsconfig.json and compile again. Note the 
//     completely different syntax in the generated js file now!  define is used by an amd loader for module loading. 
//     Generating javascript into these different formats give you power when writing typescript to produce code for any 
//     type of brower module loader you may choose to use in the future. 
export class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);