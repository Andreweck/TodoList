const input = require('readline-sync');
const Database = require("@replit/database");
const {Task, addTask, displayTasks } = require('./tasks.js');
const mainMenu = require("./mainMenu.js");

const db = new Database();


mainMenu(db);


                 //else if(choice1 === "3"){
//db.empty();
 // self(db);
//}




