# typescript-bootcamp

## Setup

1.  Ensure that you have nodejs installed. Use the latest LTS version ( 6.11.1 as of 7/21/17 ).  Do NOT use the current 8.x.x version as it is still full of bugs and incompatabilities with many UI tools. https://nodejs.org/en/

2.  Install typescript.  This is a node library that will transpile your typescript code into javascript. Open a terminal window, navigate to the root of this project and type the following ( you will need to have appropriate user rights to install programs ): 

    ```
    npm install -g typescript
    ```

3. From the command line, cd into the test directory and type `tsc` at the command line and press enter. Verify that a new `test.js` file is generated at test/build/test.js.  The `tsc` command is the typescript command that transpiles your typescript code.

4. From the command line, cd into the root of this project and run `npm install`.  This will install a local server and css library called bootstrap.

5. From the command line run `npm start`.  You should see a terminal message telling you that a server is running on port 8000. In a browser, open up http://localhost:8000/. 

6. For each exercise you should make sure that your server is running ( see previous step ), cd into the exercise directory, and run the `tsc` command from the exercise directory.  For example, if you are working on Exercise-2_0 you would `cd` into  Exercise-2_0/ and run `tsc` at the command line. 
