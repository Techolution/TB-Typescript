//////////////
// Basic Types
/////////////


// 1. - In the following block of code there are many type errors. Fix them all!  
//
//      Tip #1: In order to avoid running the 
//      tsc command over and over again, run it once with the -w switch and it will watch your files and recompile 
//      anytime you save the file. When you are done, don't forget to stop the watch by typing ctrl + c in the terminal 
//      to exit it.
//
//      Tip #2: Work your way through the typescript errors in the console one at a time starting with the top one.
function messedUpTypes() {
    let occupation = "Teacher";
    let name: string = 100;
    let hasMoney: boolean = false;
    let hasCar: boolean = "false";
    let money: number = 5.50;
    let hasDebt:boolean = true;
    let debt: number = true;
    let debtMessage: string = `Danger! You owe: ${debt} but only have ${money}!`;
    let friends = number[] = ['John', 'Leon', 'Peter', 'Kumar', 'Alice'];

    let askForMoney = function(friend: string): boolean {
        let willLend: number = false;

        for(let i = 0; i < friends.length; i++) {
            if (friends[i] === friend) {
                willLend = true;
                break;
            }
        }

        return willLend;
    }

    occupation = 200;

    if (hasDebt) {
        console.log(debtMessage);
    }

    console.log(askForMoney('Peter'));

}

// 2. - This challenge has been commented out to avoid throwing any compiler errors while you are working on the previous
//      exercise.  When you have finished the previous one, please comment out the function below and proceed. 
//
//      Because of unclear business requirements the price passed into the method below may sometimes be a number and 
//      sometimes be a string.  Fix the code by only changeing types so that it compiles without error.

// function unclearSpec(price: number) {

//     if (typeof price === 'number') {
//         price + 10;
//     } else {
//         price = "Free";
//     }

// }

