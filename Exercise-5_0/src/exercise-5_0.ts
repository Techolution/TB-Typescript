//////////////////
//   Brining in a typescript declartion file:  
//   The Typescript import statement below is bringing in all of the api and type declarations for the lodash library
//   so that we can use it in our code.  The only problem is that we do not actually have a lodash declartion file available!
//   We only have the lodash javascript library installed in the root node_modeuls directlyr. 
//   
//   This means that we could inject the lodash library into our html page with a script tag and use it but while we
//   write the code the Tyepscript compiler has no way of knowing if we are using the library correctly or giving us
//   any intellisense feedback. 
//
//   1. Under the import, type _.filter and notice that you do not get any intellisense information. In some IDE's 
//      there may occasionally be some ghost names for methods that you have attempted to type before.  These are not
//      helpful though if you do not see any actual typing or usage information. 
//   2. Open up a terminal.  In the root of this bootcamp type: npm install --save-dev @types/lodash
//   3. Make sure that your IDE is refreshed by clicking any necessary refresh buttons so that it is synchronized with
//      your local file system.  ( Visual Code Studio sometimes lags here )
//   4. Repeat step 1 and now notice all of the intellisense!  Wow!  Hit the enter key to select the filter method. 
//      Next, type a left parenthesis.  In Visual Studio Code you will now see even more api information on how to use
//      the method.  Very cool!    If your IDE support it, you may be able to right-click on 'filter' and select Go To Defintion. 
//      If so, do this and see how the api information is written in the comments in the declaration file. Nice!
import * as _ from "lodash";

_.filter([], () => {});






