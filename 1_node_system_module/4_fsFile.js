//files
const fs = require('fs')

//reading a file 

let fileContent = fs.readFileSync('f1.txt')
console.log('reading file 1 ', fileContent)  // this will give <buffer value 
console.log('reading file 1 '+ fileContent)  // this will convert into string type

//writing in a file 

fs.writeFileSync('f2.txt', 'New data is here!')   //this will overwrite the file content 
console.log('File has been written');

//append in a file 

fs.appendFileSync('f2.txt', ' Appended new data!!')  //this will append/update in existing
console.log('Append data done');

//creating new file and deleting it 

fs.writeFileSync('f3.txt', 'New file is created!')
console.log('File has been created');

fs.unlinkSync('f3.txt')
console.log('file deleted!!');
