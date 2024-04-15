//files
const fs = require('fs')

//creating a directory

fs.mkdirSync('myDir')

//checking the content of dir

let folderPath = 'F:\\Netlink-2024-all\\n_app\\1_node_system_module\\myDir'

let folderContent = fs.readdirSync(folderPath)
console.log('folder content ', folderContent);  // , gives you array and + gives you string


//check whether the dir exist or not 

let doesExist = fs.existsSync('myDir')   //gives a boolean value  works for both dir and files too
console.log('Dir exist ', doesExist);

// create and delete a dir 

fs.mkdirSync('myDelDir')  //folder should be empty while deleting a dir else give error

fs.rmdirSync('myDelDir')