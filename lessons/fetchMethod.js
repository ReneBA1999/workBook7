"use strict"

//FETCH METHOD
//The fetch() method has one required parameter, the url or path to the resource
//- by default it generates an http get request

//The fetch() method returns the response indirectly using a promise.
//-To get the data recieved in the response, you need to wait for the promise to be resolved.
//*One way for the promise to be resolved is to use the then()
//-then() calls can be chained together on promise objects

//EXAMPLE

// fetches user 1 and displays their email
let element = document.getElementById("messageArea");
fetch("http://jsonplaceholder.typicode.com/users/1")
 .then(response => response.json())
 .then(data => {
 let message = "User email: " + data.email;
 element.innerHTML = message
 });

 //In the code above, the first then() :
 //-resolves the promise to a response
 //- USes the responses json() method to convert the JSON in the response to a jSON that resolves to a javascript object

 //In the code above, the second then() :
 //-resolves the promise to the javascript object and names it data
 //- formats the objects email property and places it in the html element referenced by element.

 //In this example the id(1) is hardcoded and most real examples , the webpage would allow the user to specify it in an input field, pick it from 
 //..a dropdown etc..


 //EXAMPLE: LOADING A DROPDOWN WITH ARRAY DATA

 //In this example fetch() will be used to send a GET request that returns an array of objects

 // fetches all users and places their emails in a dropdown list
let element2 = document.getElementById("emailDropdown");
fetch("http://jsonplaceholder.typicode.com/users")
 .then(response => response.json())
 .then(data => {
 for(let i=0; i<data.length; i++) {
 let opt = document.createElement("option");
 opt.textContent = data[i].email;
 opt.value = data[i].email;
 element.appendChild(opt);
 }
 });

 //Notice that not much changes
 //- In the second then(), the parameter data is the returned array

 //EXAMPLE: LOADING A TABLE WITH ARRAY DATA
 
 //In the following example, fetch() will be used again to send a GET request that returns an array of objects

 //* However this time we will display the data in  a table

 // fetches all users and places their names and emails 
// in a table
let table = document.getElementById("userTable");
fetch("http://jsonplaceholder.typicode.com/users")
 .then(response => response.json())
 .then(data => {
 for(let i=0; i<data.length; i++) {
 let row = table.insertRow(-1);
 let cell1 = row.insertCell(0);
 let cell2 = row.insertCell(1);
 cell1.innerHTML = data[i].name;
 cell2.innerHTML = data[i].email;
 }
 });
