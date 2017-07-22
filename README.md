# typescript-bootcamp

## Setup

1.  Ensure that you have nodejs installed. Use the latest LTS version ( 6.11.1 as of 7/21/17 ).  Do NOT use the current 8.x.x version as it is still full of bugs and incompatabilities with UI tools. https://nodejs.org/en/

2.  Install typescript.  This is a node library that will transpile your typescript code into javascript. Open a terminal window, navigate to the root of this project and type the following ( you will need to have appropriate user rights to install programs ): 

    ```
    npm install -g typescript
    ```

3. Test your setup by typing `tsc test.ts` at the command line and verifying that a new `test.js` file is generated in your root.  
