////////////////
//Variable Declarations
///////////////

//////////////
//Note: If your server is not already running then type npm start at the command line from the root.
/////////////

//1. - Open up a browser and navigate to http://localhost:8000/Exercise-2_0/  
//   - Compile to typscript from the terminal by cd into directory and running tsc
//   - Click the button labeled 'varTest' and note that the alert shows a 2.
//   - using your knoledge of var and let, Fix this code so that the alert shows the original value of 1.  

function varTest() {
  var x = 1;

  if (true) {
    var x = 2; 
  }

  alert(x);
  
}
