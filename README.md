NAME-SURBHI KUMARI
ASSIGNMENT-CRUD API

STEPS FOLLOWED:
1.	Created project folder in vs code. Initialized package. Json. Command used: npm init -y
2.	Created index.js file and installed express. command used install –save express
3.	As I wanted to use latest node module and I want to use import instead of require inside index.js file so I added the type=” module” in the package. json 
4.	Installed body-parser as this allow us to take in incoming post request body.
5.	Initialized the express app and called it as function inside the index.js file.
6.	Code(index.js): This is the basic code setup I did to connect with server, later I created the .env file where I specified the port =5000
    import express from "express";
    import bodyParser from "body-parser";
    const app = express();
    const PORT = 5000;
    app.use(bodyParser.json());
    app.get("/", (req, res) => {
    res.send("hello from server");
    });
    app.listen(PORT, () =>
    console.log(`Server running on port : http://localhost:${PORT}`)
    );
  7.Installed nodemon so that I don’t need to start the server again and again     from the terminal. I installed it as dev dependency as w don’t need nodemon in production. command: npm I –save-dev nodemon.
8.Added the start command in package. Json file inside scripts. “start”:” nodemon” index.js”.
9.As node and express is all about routing .so I created a route to separate
Functionalities which we can visit on the browser and send request to.
10.Inside the index.js I called the route which takes two parameters-path and a callback function.
Example: app.get (‘/’, (req,res)=>{
Console.log (“Hi,This is Surbhi kumari”);
res.send(“hello from homepage.”)
});

Note: I have used THUNDERCLIENT (Extension of vs code) instead of postman to test the created api as in browser we can only test get request, for using post delete, patch, put we need to use postman or thunder client. I am also attaching the screenshots in the document which i will be sharing along with my resume and skype id.
 

GITHUB REPOSITORY LINK-https://github.com/surbhi6061/crud_api
