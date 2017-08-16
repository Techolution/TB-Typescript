////////////////
//Variable Declarations
///////////////

//////////////
//Note: If your server is not already running then type npm start at the command line from the root.
/////////////

//1. - Click the button labeled 'varTest' and note that the alert shows a 2.
//   - using your knoledge of var and let, Fix this code so that the alert shows the original value of 1.  

function varTest() {
  var x = 1;

  if (true) {
    var x = 2; 
  }

  alert(x);

}

// 2. PI is getting changed to an invalid number.  Change the code so that the compiler catches this error; Note:
//    You should check out the compiler messages in your terminal window.  If you are using Visual Studio Code, you will 
//    see syntax error highlighting when the typescript is failing.
//    When the compiler identifies the error you should remove it.
function keepPiConstant() {
    
    var PI: number = 3.14;
    var radius: number = 2;

    PI = 4;

    alert(PI * (radius * radius));

}

// 3.  You want to keep secretName scoped to the if block. Fix the code so that the compiler catches this
//     error before production and then change the alert message to say, "Secret Safe!"
function keepItInTheBlock() {
    
    if (true) {
        var secretName = "Secret Revelaed! No!";
    }

    alert(secretName);
}
