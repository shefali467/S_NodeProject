const path = require('path')

let extensn = path.extname('C:\Users\sgoyal\Pictures\IApp\n_app\1_node_system_module\data.txt')
console.log('ext', extensn);

//single slashes won't give accurate responses for some security reasons so use double slash for required ans

let baseName = path.basename('C:\\Users\\sgoyal\\Pictures\\IApp\n_app\\1_node_system_module\\data.txt')
console.log('baseName', baseName);

console.log('file path ', __filename);
console.log('dir path ', __dirname);